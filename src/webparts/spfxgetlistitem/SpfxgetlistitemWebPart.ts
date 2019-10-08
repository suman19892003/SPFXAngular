import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './SpfxgetlistitemWebPart.module.scss';
import * as strings from 'SpfxgetlistitemWebPartStrings';

import "reflect-metadata";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
require('zone.js');

export interface ISpfxgetlistitemWebPartProps {
  description: string;
}

export default class SpfxgetlistitemWebPart extends BaseClientSideWebPart<ISpfxgetlistitemWebPartProps> {

  public render(): void {

  window['webPartContext'] = this.context;

  this.domElement.innerHTML = '<my-spfx-app>Loading..</my-spfx-app>';
  platformBrowserDynamic().bootstrapModule(AppModule);

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
