import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Dforms } from '../models/dforms';
import { FormGroupName } from '@angular/forms';
//import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DformsService {
  
  private corsHeaders:HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.corsHeaders=new HttpHeaders({
      'Accept' : 'application/json'
    });
   }

  getAllDforms0(idObjGroup:string,isIncludedDel:boolean,groupName:string): any {
    let urlzap:string=`${environment.apiUrl}/form/getListByObjGroupId?idObjGroup=`+idObjGroup+`&isIncludedDel=`+isIncludedDel;
    //urlzap='assets/forms.json'
    return this.httpClient.get<Dforms[]>(urlzap)
    .toPromise()
      .then((res) => {
        let raw_json:Dforms[] = res;
        let new_list: any = [];
        for (let k = 0; k < raw_json.length; k++) {
          new_list.push({
            id: raw_json[k].id,
            idFormChain: raw_json[k].idFormChain,
            fkObjGroup: raw_json[k].fkObjGroup,
            grName: groupName,
            idDor: raw_json[k].idDor,
            pos: raw_json[k].pos,
            name: raw_json[k].name,
            description: raw_json[k].description,
            odf: raw_json[k].odf,
            typeForm: raw_json[k].typeForm,
            idAuthor: raw_json[k].idAuthor,
            activeTip: raw_json[k].activeTip,
            visibleTip: raw_json[k].visibleTip,
            privilege: raw_json[k].privilege,
            version: raw_json[k].version,
            dateStart: raw_json[k].dateStart,
            dateEnd: raw_json[k].dateEnd,
            dateCreate: raw_json[k].dateCreate,
            dateDelete: raw_json[k].dateDelete,
            corTip: raw_json[k].corTip,
            listFormMark: raw_json[k].listFormMark,
            listNumericalPokValue: raw_json[k].listNumericalPokValue
          }); 
        }
        return new_list || [];
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
    let urlzap:string=`${environment.apiUrl}/form/getListPublishedByObjGroupId?idObjGroup=`+idObjGroup+`&isIncludedDel=`+isIncludedDel+`&isAwailable=`+isAwailable+`&dateReport=`+dateReport;
    return this.httpClient.get<Dforms[]>(urlzap)
    .toPromise()
      .then((res) => {
        return res;
      })
      .catch((res) => {
        console.error(res);
      });
  }

}