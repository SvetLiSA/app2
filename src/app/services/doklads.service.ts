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
    this.httpClient.get<Doklads[]>(`${environment.apiUrl}/doklad/getListByObjGroupId?idObjGroup=`+idObjGroup+`&isIncludedDel=`+isIncludedDel)
    .subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }

  getFiles() {
    return this.httpClient.get<Doklads[]>('assets/dokl.json')
    .toPromise()
      .then((res) => {
        return res;
      });
  }

  getPublishedDoklads(idObjGroup:string,isIncludedDel:boolean,dateReport:string): void {
    //idObjGroup
    //isIncludedDel
    //dateReport
    this.httpClient.get<Doklads[]>(`${environment.apiUrl}/doklad/getListPublishedByObjGroupId?idObjGroup=`+idObjGroup+`&isIncludedDel=`+isIncludedDel+`&dateReport=`+dateReport)
    .subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }
  
  getDoklad(idDoklad:string):any  {
    /*
    this.httpClient.get<Doklads>(`${environment.apiUrl}/doklad/getDoklad?idDoklad=`+idDoklad)
    .subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
    */
    return [{
      "activeTip": true,
      "corTip": "tip",
      "customer": "Заказчик",
      "dateCreate": "2020-09-17T04:16:05",
      "dateDelete": "2020-09-17T04:16:05.396Z",
      "dateEnd": "2020-09-17T04:16:05.396Z",
      "dateStart": "2020-09-17T04:16:05.397Z",
      "fkObjGroup": "1",
      "fullName": "Полное название",
      "groupPos": 0,
      "id": "ID доклада",
      "idAuthor": "ID автора",
      "idDokladChain": "ID цепочки доклада",
      "idDor": "код дороги",
      "listDokladOgl": [
        {
          "fkDoklad": "ID доклада",
          "id": "ID оглавления",
          "listDokladLinkForm": [
            {
              "fkDokladOgl": "ID оглавления доклада",
              "id": "ID формы1",
              "idFormChain": "ID цепочки формы",
              "rangeForInsert": "диапазон",
              "reportHour": 0,
              "startPos": 0
            }
          ],
          "listName": "лист 1",
          "listPos": 1,
          "oglName": "отчёт 1"
        },
        {
          "fkDoklad": "ID доклада",
          "id": "ID оглавления",
          "listDokladLinkForm": [
            {
              "fkDokladOgl": "ID оглавления доклада",
              "id": "ID формы2",
              "idFormChain": "ID цепочки формы",
              "rangeForInsert": "диапазон",
              "reportHour": 0,
              "startPos": 0
            }
          ],
          "listName": "лист 2",
          "listPos": 2,
          "oglName": "отчёт 2"
        }
      ],
      "privilege": "КТ",
      "shortName": "Краткое название",
      "version": "1.0",
      "visibleTip": true
    }];
  }
  
  getTitlePage(idDoklad:string): void {
    this.httpClient.get<any>(`${environment.apiUrl}/doklad/getTitlePage?idDoklad=`+idDoklad)
    .subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }
  
  getCalcDoklad(idDoklad:string,format:string,dateReport:string): void {
    // ещё не готово api
    this.httpClient.get<any>(`${environment.apiUrl}/doklad/getCalculatedDoklad?idDokladChain=`+idDoklad)
    .subscribe( data => {
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
    this.httpClient.post<any>(`${environment.apiUrl}/doklad/add`,{ stringDokladDTO:stringDokladDTO, titleFile:titleFile, reason:reason },{ headers:myHeaders })
    .subscribe( data => {
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
    this.httpClient.post<any>(`${environment.apiUrl}/doklad/update`,{ stringDokladDTO:stringDokladDTO, titleFile:titleFile, reason:reason },{ headers:myHeaders })
    .subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }
  
  deleteDoklad(idDoklad:string,reason:string): void {
    this.httpClient.post<any>(`${environment.apiUrl}/doklad/delete`,{ idDoklad:idDoklad, reason:reason })
    .subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }

  setInactiveDoklad(idDoklad:string): void {
    this.httpClient.post<any>(`${environment.apiUrl}/doklad/setInactive`,{ idDoklad:idDoklad })
    .subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }

  setActiveDoklad(idDoklad:string): void {
    this.httpClient.post<any>(`${environment.apiUrl}/doklad/setActive`,{ idDoklad:idDoklad })
    .subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }

  moveDoklad(idDoklad:string,idNewObjGroup:string,position:number): void {
    this.httpClient.post<any>(`${environment.apiUrl}/doklad/move`,{ idDoklad:idDoklad, idNewObjGroup:idNewObjGroup, position:position })
    .subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }
  
  renameDoklad(idDoklad:string,fullName:string,shortName:string): void {
    this.httpClient.post<any>(`${environment.apiUrl}/doklad/changeName`,{ idDoklad:idDoklad, fullName:fullName, shortName:shortName })
    .subscribe( data => {
      console.log(data);
    },
    (error: HttpErrorResponse) => {
    console.log (error.name + ' ' + error.message);
    });
  }

}
