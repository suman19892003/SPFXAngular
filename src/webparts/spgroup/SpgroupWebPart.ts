import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import { SPComponentLoader } from '@microsoft/sp-loader';
import pnp, { sp, Item, ItemAddResult, ItemUpdateResult } from "sp-pnp-js";
import objMyCustomHTML from './components/MyCustomHTML';

import styles from './SpgroupWebPart.module.scss';
import * as strings from 'SpgroupWebPartStrings';

//https://www.youtube.com/watch?v=UFHR38VfDkU for new deployment using rest api

export interface ISpgroupWebPartProps {
  description: string;
}

export default class SpgroupWebPart extends BaseClientSideWebPart<ISpgroupWebPartProps> {

  public constructor() {
    super();
    SPComponentLoader.loadCss('https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css');
    SPComponentLoader.loadCss('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');

    SPComponentLoader.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js', { globalExportsName: 'jQuery' }).then((jQuery: any): void => {
      SPComponentLoader.loadScript('https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js',  { globalExportsName: 'jQuery' }).then((): void => {
      });
    });
  }

  public render(): void {

    //this.domElement.innerHTML = objMyCustomHTML.templateHTML;
    this.domElement.innerHTML = `<div class="container">
    <div class="form-group">
      All Group and users : <div id='group'></div>
    </div>
    <div class="form-group">
      <input type="search" placeholder="Search the data" id="idSearch"/>
    </div>
    </div>`;
    this.getGroup();
    this._setButtonEventHandlers();
  }

  private _setButtonEventHandlers(): void {
    const webPart: SpgroupWebPart = this;
    this.domElement.querySelector('#idSearch').addEventListener('click', () => {
       this._clickedMe();
    });
  }

 private _clickedMe(): void {
  console.log('clicked Me');
}

  protected getGroup(){
    var usersInfo='';
    debugger;

        sp.web.siteGroups.getByName('Approvers').users.get().then(function(result) {
          //var usersInfo = "";
          for (var i = 0; i < result.length; i++) {
              usersInfo += "Title: " + result[i].Title + " ID:" + result[i].Id + "<br/>";
          }
          console.log(usersInfo);
          document.getElementById('group').innerText=usersInfo;
          //this.domElement.innerHTML =`<div>User in the list are : ${usersInfo}</div>`;
        }).catch(function(err) {
            alert("Group not found: " + err);
        });
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
