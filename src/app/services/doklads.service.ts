import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Doklads } from '../models/doklads';

@Injectable({
  providedIn: 'root'
})
export class DokladsService {
  constructor(private httpClient: HttpClient) { }
  
  getAllDoklads(idObjGroup:string,isIncludedDel:boolean): void {
    //idObjGroup
    //isIncludedDel
    this.httpClient.get<Doklads[]>(`${environment.apiUrl}/doklad/getListByObjGroupId?idObjGroup=`+idObjGroup+`&isIncludedDel=`+isIncludedDel).subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }

  getPublishedDoklads(idObjGroup:string,isIncludedDel:boolean,dateReport:string): void {
    //idObjGroup
    //isIncludedDel
    //dateReport
    this.httpClient.get<Doklads[]>(`${environment.apiUrl}/doklad/getListPublishedByObjGroupId?idObjGroup=`+idObjGroup+`&isIncludedDel=`+isIncludedDel+`&dateReport=`+dateReport).subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }
  
  getDoklad(idDoklad:string): void {
    this.httpClient.get<Doklads[]>(`${environment.apiUrl}/doklad/getDoklad?idDoklad=`+idDoklad).subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }
  
  getTitlePage(idDoklad:string): void {
    this.httpClient.get<any>(`${environment.apiUrl}/doklad/getTitlePage?idDoklad=`+idDoklad).subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }
  
  getCalcDoklad(idDoklad:string,format:string,dateReport:string): void {
    // ещё не готово api
    this.httpClient.get<any>(`${environment.apiUrl}/doklad/getCalculatedDoklad?idDokladChain=`+idDoklad).subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }
  
  newDoklad(stringDokladDTO:string,titleFile:File,reason:string): void {
    //stringDokladDTO
    //titleFile
    //reason
    const myHeaders = new HttpHeaders().set('Authorization', 'my-auth-token');
    this.httpClient.post<any>(`${environment.apiUrl}/doklad/add`,{ stringDokladDTO:stringDokladDTO, titleFile:titleFile, reason:reason },{ headers:myHeaders }).subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }
  
  updateDoklad(stringDokladDTO:string,titleFile:File,reason:string): void {
    //stringDokladDTO
    //titleFile
    //reason
    const myHeaders = new HttpHeaders().set('Authorization', 'my-auth-token');
    this.httpClient.post<any>(`${environment.apiUrl}/doklad/update`,{ stringDokladDTO:stringDokladDTO, titleFile:titleFile, reason:reason },{ headers:myHeaders }).subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }
  
  deleteDoklad(idDoklad:string,reason:string): void {
    this.httpClient.post<any>(`${environment.apiUrl}/doklad/delete`,{ idDoklad:idDoklad, reason:reason }).subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }

  setInactiveDoklad(idDoklad:string): void {
    this.httpClient.post<any>(`${environment.apiUrl}/doklad/setInactive`,{ idDoklad:idDoklad }).subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }

  setActiveDoklad(idDoklad:string): void {
    this.httpClient.post<any>(`${environment.apiUrl}/doklad/setActive`,{ idDoklad:idDoklad }).subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }

  moveDoklad(idDoklad:string,idNewObjGroup:string,position:number): void {
    this.httpClient.post<any>(`${environment.apiUrl}/doklad/move`,{ idDoklad:idDoklad, idNewObjGroup:idNewObjGroup, position:position }).subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }
  
  renameDoklad(idDoklad:string,fullName:string,shortName:string): void {
    this.httpClient.post<any>(`${environment.apiUrl}/doklad/changeName`,{ idDoklad:idDoklad, fullName:fullName, shortName:shortName }).subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }

}
