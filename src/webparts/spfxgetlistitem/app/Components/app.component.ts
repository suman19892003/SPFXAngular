import { Component, Input, OnInit,Inject } from '@angular/core';
import {IWebPartContext} from '@microsoft/sp-webpart-base';

@Component({
  selector: 'my-spfx-app',
  template: `<h1>Welcome to SPFx {{name}}!!</h1>`
})
export class AppComponent implements OnInit  {
    public name: string = '';
    public context:IWebPartContext;

    constructor(){
    }

    public  ngOnInit() {
        this.context= window["webPartContext"];
        this.name= this.context.pageContext.user.displayName;
    }
}
