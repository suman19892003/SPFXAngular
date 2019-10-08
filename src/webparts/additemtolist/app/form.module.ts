import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormComponent }  from './Components/form.component';
import {ListService} from './Components/form.service';
import 'reflect-metadata';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ FormComponent ],
  providers: [ ListService],
  bootstrap:    [ FormComponent ]
})
export class FormModule  { }
