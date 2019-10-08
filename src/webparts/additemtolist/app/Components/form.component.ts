import { Component, Input, OnInit,Inject } from '@angular/core';
//import {IWebPartContext} from '@microsoft/sp-webpart-base';
import {ListService} from './form.service';

@Component({
  selector: 'form-app',
  //templateUrl: 'src/webparts/additemtolist/app/Components/form.component.html',
  template: `
    <table class="table table-hover table-bordered">
    <tr><td><b>ID</b></td><td><b>Title</b></td><td></td></tr>
    <tr *ngFor="let emp of listService.list">
      <td (click)="showPopUp(emp)">{{emp.ID}}</td>
      <td>{{emp.Title}}</td>
      <td><button (click)="onDelete(emp.ID)" class="btn btn-sm btn-outline-danger">X</button></td>
    </tr>
  </table>
    `

})
export class FormComponent implements OnInit  {
    public name: string = '';
    //public context:IWebPartContext;

    constructor(private listService:ListService){
    }

    ngOnInit() {
      //debugger;
      this.listService.refreshList();
    }

    onDelete(id){
      if (confirm('Do you wish to delete this record ?')) {
        this.listService.deleteEmployee(id);
      }
    }

    showPopUp(emp){
      alert(emp.ID);
    }
}
