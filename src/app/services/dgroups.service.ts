import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Dgroups } from '../models/dgroups';

@Injectable()
export class DgroupsService {
  
  constructor(private httpClient: HttpClient) { }

  getAllDgroups(isIncludedDel:boolean,dateReport:string): void {
    //isIncludedDel
    //dateReport
    this.httpClient.get<Dgroups[]>(`${environment.apiUrl}/objGroup/getAllCentralGroup`).subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }

}