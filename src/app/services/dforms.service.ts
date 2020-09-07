import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Dforms } from '../models/dforms';
//import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DformsService {
  constructor(private httpClient: HttpClient) { }

  getAllDforms(id:string,isIncludedDel:boolean): void {
    //id
    //isIncludedDel
    this.httpClient.get<Dforms[]>(`${environment.apiUrl}/form/getListByObjGroupId`).subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }

  getPublishedDforms(id:string,isIncludedDel:boolean,isAwailable:boolean,dateReport:Date): void {
    //id
    //isIncludedDel
    //isAwailable
    //dateReport
    this.httpClient.get<Dforms[]>(`${environment.apiUrl}/form/getListPublishedByObjGroupId`).subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }
}
