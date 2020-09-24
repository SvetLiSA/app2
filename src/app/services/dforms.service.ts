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

  getAllDforms(idObjGroup:string,isIncludedDel:boolean): any {
    return this.httpClient.get<Dforms[]>(`${environment.apiUrl}/form/getListByObjGroupId?idObjGroup=`+idObjGroup+`&isIncludedDel=`+isIncludedDel)
    .toPromise()
      .then((res) => {
        return res;
      })
      .catch((res) => {
        console.error(res);
      });
  }

  /*
  getFiles() {
    return this.httpClient.get<Dforms[]>('assets/forms.json')
    .toPromise()
      .then((res) => {
        return res;
      });
  }
  */

  getPublishedDforms(idObjGroup:string,isIncludedDel:boolean,isAwailable:boolean,dateReport:Date): any {
    return this.httpClient.get<Dforms[]>(`${environment.apiUrl}/form/getListPublishedByObjGroupId?idObjGroup=`+idObjGroup+`&isIncludedDel=`+isIncludedDel+`&isAwailable=`+isAwailable+`&dateReport=`+dateReport)
    .toPromise()
      .then((res) => {
        return res;
      })
      .catch((res) => {
        console.error(res);
      });
  }

}