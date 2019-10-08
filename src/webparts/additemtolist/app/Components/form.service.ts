import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Listdata} from './form.model';

import pnp, { sp, Item, ItemAddResult, ItemUpdateResult } from "sp-pnp-js";

@Injectable()
export class ListService {

  formData: Listdata;
  list: Listdata[];
  //constructor( private http: HttpClient) {
    constructor( ) {

  }
  postEmployee(formData: Listdata) {
    //return this.http.post('http://localhost:2879/api/Employee', formData);
  }

  refreshList() {
    sp.web.lists.getByTitle("Test").items.get().then((items: Listdata[]) => {
      this.list=items;
      debugger;
      console.log(items);
    });
  }

  putEmployee(formData: Listdata) {
    //return this.http.put('http://localhost:2879/api/Employee/' + formData.EmployeeID, formData);
  }

  deleteEmployee(id: number) {
    sp.web.lists.getByTitle("Test").items.getById(id).delete().then(()=>{
      alert("Item was deleted "+id);
    })
    //return this.http.delete('http://localhost:2879/api/Employee/' + id);
  }

}
