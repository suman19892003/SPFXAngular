import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './AdditemtolistWebPart.module.scss';
import * as strings from 'AdditemtolistWebPartStrings';

import { SPComponentLoader } from '@microsoft/sp-loader';

import "reflect-metadata";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormModule } from './app/form.module';
require('zone.js');

export interface IAdditemtolistWebPartProps {
  description: string;
}

export default class AdditemtolistWebPart extends BaseClientSideWebPart<IAdditemtolistWebPartProps> {


  constructor() {
    super();
    SPComponentLoader.loadCss('https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css');
    SPComponentLoader.loadCss('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');

    SPComponentLoader.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js', { globalExportsName: 'jQuery' }).then((jQuery: any): void => {
      SPComponentLoader.loadScript('https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js',  { globalExportsName: 'jQuery' }).then((): void => {
      });
    });
  }



  public render(): void {
      window['webPartContext'] = this.context;

      this.domElement.innerHTML = '<form-app>Loading..</form-app>';
      platformBrowserDynamic().bootstrapModule(FormModule);
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
