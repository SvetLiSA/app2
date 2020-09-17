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

  getAllDforms(idObjGroup:string,isIncludedDel:boolean): void {
    this.httpClient.get<Dforms[]>(`${environment.apiUrl}/form/getListByObjGroupId?idObjGroup=`+idObjGroup+`&isIncludedDel=`+isIncludedDel)
    .subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }

  getFiles() {
    return this.httpClient.get<Dforms[]>('assets/forms.json')
    .toPromise()
      .then((res) => {
        return res;
      });
  }

  getPublishedDforms(idObjGroup:string,isIncludedDel:boolean,isAwailable:boolean,dateReport:Date): void {
    this.httpClient.get<Dforms[]>(`${environment.apiUrl}/form/getListPublishedByObjGroupId?idObjGroup=`+idObjGroup+`&isIncludedDel=`+isIncludedDel+`&isAwailable=`+isAwailable+`&dateReport=`+dateReport)
    .subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }
}
