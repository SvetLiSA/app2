import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Doklads } from '../models/doklads';

@Injectable({
  providedIn: 'root'
})
export class DokladsService {
  constructor(private httpClient: HttpClient) { }
 
  getAllDoklads(idObjGroup:string,isIncludedDel:boolean):any {
    let urlzap:string=`${environment.apiUrl}/doklad/getListByObjGroupId?idObjGroup=`+idObjGroup+`&isIncludedDel=`+isIncludedDel;
    urlzap='assets/dokl.json';
    return this.httpClient.get<Doklads[]>(urlzap)
    .toPromise()
      .then((res) => {
        return res;
      })
      .catch((res) => {
        console.error(res);
      });
  }

  getPublishedDoklads(idObjGroup:string,isIncludedDel:boolean,dateReport:string): any {
    let urlzap:string=`${environment.apiUrl}/doklad/getListPublishedByObjGroupId?idObjGroup=`+idObjGroup+`&isIncludedDel=`+isIncludedDel+`&dateReport=`+dateReport;
    return this.httpClient.get<Doklads[]>(urlzap)
    .toPromise()
      .then((res) => {
        return res;
      })
      .catch((res) => {
        console.error(res);
      });
  }

  getDoklad(idDoklad:string):any {
    let urlzap:string=`${environment.apiUrl}/doklad/getDoklad?idDoklad=`+idDoklad;
    urlzap='assets/dokl0.json';
    return this.httpClient.get<Doklads>(urlzap)
    .toPromise()
      .then((res) => {
        return res;
      })
      .catch((res) => {
        console.error(res);
      });
  } 
    
  getTitlePage(idDoklad:string): any {
    this.httpClient.get<any>(`${environment.apiUrl}/doklad/getTitlePage?idDoklad=`+idDoklad)
    .subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }
  
  getCalcDoklad(idDoklad:string,format:string,dateReport:string): any {
    // ещё не готово api
    this.httpClient.get<any>(`${environment.apiUrl}/doklad/getCalculatedDoklad?idDokladChain=`+idDoklad)
    .subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }
  
  newDoklad(stringDokladDTO:string,titleFile:File,reason:string): any {
    //stringDokladDTO
    //titleFile
    //reason
    const myHeaders = new HttpHeaders().set('Authorization', 'my-auth-token');
    this.httpClient.post<any>(`${environment.apiUrl}/doklad/add`,{ stringDokladDTO:stringDokladDTO, titleFile:titleFile, reason:reason },{ headers:myHeaders })
    .subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }
  
  updateDoklad(stringDokladDTO:string,titleFile:File,reason:string): any {
    //stringDokladDTO
    //titleFile
    //reason
    const myHeaders = new HttpHeaders().set('Authorization', 'my-auth-token');
    this.httpClient.post<any>(`${environment.apiUrl}/doklad/update`,{ stringDokladDTO:stringDokladDTO, titleFile:titleFile, reason:reason },{ headers:myHeaders })
    .subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }
  
  deleteDoklad(idDoklad:string,reason:string): any {
    this.httpClient.post<any>(`${environment.apiUrl}/doklad/delete`,{ idDoklad:idDoklad, reason:reason })
    .subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }

  setInactiveDoklad(idDoklad:string): any {
    this.httpClient.post<any>(`${environment.apiUrl}/doklad/setInactive`,{ idDoklad:idDoklad })
    .subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }

  setActiveDoklad(idDoklad:string): any {
    this.httpClient.post<any>(`${environment.apiUrl}/doklad/setActive`,{ idDoklad:idDoklad })
    .subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }

  moveDoklad(idDoklad:string,idNewObjGroup:string,position:number): any {
    this.httpClient.post<any>(`${environment.apiUrl}/doklad/move`,{ idDoklad:idDoklad, idNewObjGroup:idNewObjGroup, position:position })
    .subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }
  
  renameDoklad(idDoklad:string,fullName:string,shortName:string): any {
    this.httpClient.post<any>(`${environment.apiUrl}/doklad/changeName`,{ idDoklad:idDoklad, fullName:fullName, shortName:shortName })
    .subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }

  emptyDoklad():any  {
    let kodDor:string="61";
    return [{
      "activeTip": true,
      "corTip": "I",
      "customer": "Заказчик доклада",
      "dateCreate": null,
      "dateDelete": null,
      "dateEnd": "2120-12-31T04:59:59.396Z",
      "dateStart": new Date(),
      "fkObjGroup": "",
      "fullName": "Полное название доклада",
      "groupPos": 0,
      "id": null,
      "idAuthor": null,
      "idDokladChain": null,
      "idDor": kodDor,
      "listDokladOgl": [],
      "privilege": "",
      "shortName": "Краткое название доклада",
      "version": "1.0",
      "visibleTip": false
    }];
  }

}