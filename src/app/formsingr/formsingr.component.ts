import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DokladsService } from '../services/doklads.service';
import { Doklads } from '../models/doklads';
import { SelectItem } from 'primeng/api';
import { of, from } from 'rxjs';

@Component({
  selector: 'app-formsingr',
  templateUrl: './formsingr.component.html',
  styleUrls: ['./formsingr.component.css']
})

export class FormsingrComponent implements OnInit {
  id: string;
  doklads:Doklads[];  
  title = 'Список докладов в группе';
  options:SelectItem[];
  values:any;
  todayDate: string;

  constructor(private datePipe: DatePipe, private route: ActivatedRoute, private dokladService : DokladsService) { 
    this.id = route.snapshot.params['id'];
    this.options = [
      {label: 'Активные доклады', value: '1'}, 
      {label: 'Только опубликованные', value: '2'}, 
      {label: 'Все (с удалёнными)', value: '3'}
    ];
    this.todayDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd h:i:s');
  }
    
  public paramChange(obj:any){
    console.log(obj.value);
    switch(obj.value){
      case "1": this.dokladService.getAllDoklads(this.id,false); break;
      case "2": this.dokladService.getPublishedDoklads(this.id,true,this.todayDate); break;
      case "3": this.dokladService.getAllDoklads(this.id,true); break;
    }
  }

  ngOnInit() {   
    
    this.dokladService.getAllDoklads(this.id,false);    

    //--------------------------------------
    this.doklads=[
      {
        "id": "8a488b44740b8ec701740b8fe5e30000",    "idDokladChain": "889d5d92-48aa-440f-9f86-bfa0e9451c8d",    "fkObjGroup": "1",    "idDor": "17",
        "groupPos": 1,    "shortName": "shortName",    "fullName": "fullName",    "customer": "customer",    "idAuthor": "idAuthor",
        "activeTip": null,    "visibleTip": true,    "privilege": null,    "version": "1.0",    "dateStart": "2020-08-17 12:44:35",
        "dateEnd": "2020-08-22 12:44:35",    "dateCreate": "2020-08-20 14:10:13",    "dateDelete": null,    "corTip": "I",    "listDokladOgl": null
      },
      {
        "id": "8a488b44740b8ec701740b90279f0004",    "idDokladChain": "348250d7-6006-4224-803f-542acb674291",    "fkObjGroup": "1",    "idDor": "17",
        "groupPos": 1,    "shortName": "shortName",    "fullName": "fullName",    "customer": "customer",    "idAuthor": "idAuthor",
        "activeTip": true,    "visibleTip": true,    "privilege": null,    "version": "1.0",    "dateStart": "2020-08-17 12:44:35",
        "dateEnd": "2020-08-22 12:44:35",    "dateCreate": "2020-08-20 14:10:30",    "dateDelete": null,    "corTip": "I",    "listDokladOgl": null
      },
      {
        "id": "8a488b4473fcd8e40173fcd8faa80001",    "idDokladChain": "add347a2-ca54-4843-935f-0b4f8015d784",    "fkObjGroup": "1",    "idDor": "17",
        "groupPos": 1,    "shortName": "shortName",    "fullName": "fullName",    "customer": "customer",    "idAuthor": "idAuthor",
        "activeTip": null,    "visibleTip": null,    "privilege": null,    "version": "1.0",    "dateStart": "2020-08-17 12:44:35",
        "dateEnd": "2020-08-22 12:44:35",    "dateCreate": "2020-08-17 17:35:45",    "dateDelete": null,    "corTip": "I",    "listDokladOgl": null
      },
      {
        "id": "8a488b447400ac61017400af818c0000",    "idDokladChain": "3d6a272d-40fc-497a-852b-1c1e09dfbfd1",    "fkObjGroup": "1",    "idDor": "17",
        "groupPos": 1,    "shortName": "shortName",    "fullName": "fullName",    "customer": "customer",    "idAuthor": "idAuthor",
        "activeTip": true,    "visibleTip": true,    "privilege": null,    "version": "1.0",    "dateStart": "2020-08-17 12:44:35",
        "dateEnd": "2020-08-22 12:44:35",    "dateCreate": "2020-08-18 11:28:56",    "dateDelete": null,    "corTip": "I",    "listDokladOgl": null
      },
      {
        "id": "8a488b4473fca2e60173fca307ba0000",    "idDokladChain": "10f17280-ab81-4a94-b8e2-c1a0da95cb9a",    "fkObjGroup": "1",    "idDor": "17",
        "groupPos": 1,    "shortName": "short",    "fullName": "full",    "customer": "customer",    "idAuthor": "idAuthor",
        "activeTip": null,    "visibleTip": null,    "privilege": null,    "version": "1.0",    "dateStart": "2020-08-17 12:44:35",
        "dateEnd": "2020-08-22 12:44:35",    "dateCreate": "2020-08-17 12:44:35",    "dateDelete": null,    "corTip": "I",    "listDokladOgl": null
      },
      {
        "id": "8a488b44740b145501740b17b8d70001",    "idDokladChain": "a8fb288f-8ec6-4fb9-ba53-b6f190724119",    "fkObjGroup": "1",    "idDor": "17",
        "groupPos": 1,    "shortName": "shortName",    "fullName": "fullName",    "customer": "customer",    "idAuthor": "idAuthor",
        "activeTip": true,    "visibleTip": true,    "privilege": null,    "version": "1.0",    "dateStart": "2020-08-17 12:44:35",
        "dateEnd": "2020-08-22 12:44:35",    "dateCreate": "2020-08-20 11:58:58",    "dateDelete": null,    "corTip": "I",    "listDokladOgl": null
      },
      {
        "id": "8a488b44740b8ad001740b8c34ce0000",    "idDokladChain": "19f79905-2947-4ce4-9a73-041f5144bd35",    "fkObjGroup": "1",    "idDor": "17",
        "groupPos": 1,    "shortName": "shortName",    "fullName": "fullName",    "customer": "customer",    "idAuthor": "idAuthor",
        "activeTip": null,    "visibleTip": true,    "privilege": null,    "version": "1.0",    "dateStart": "2020-08-17 12:44:35",
        "dateEnd": "2020-08-22 12:44:35",    "dateCreate": "2020-08-20 14:06:12",    "dateDelete": null,    "corTip": "I",    "listDokladOgl": null
      },
      {
        "id": "8a488b44740b8ad001740b8e95400005",    "idDokladChain": "76498fbc-504d-4a8c-9590-106b8309f150",    "fkObjGroup": "1",    "idDor": "17",
        "groupPos": 1,    "shortName": "shortName",    "fullName": "fullName",    "customer": "customer",    "idAuthor": "idAuthor",
        "activeTip": null,    "visibleTip": true,    "privilege": null,    "version": "1.0",    "dateStart": "2020-08-17 12:44:35",
        "dateEnd": "2020-08-22 12:44:35",    "dateCreate": "2020-08-20 14:08:47",    "dateDelete": null,    "corTip": "I",    "listDokladOgl": null
      },
      {
        "id": "8a488b44740bb5c401740bb5e86e0000",    "idDokladChain": "7ab96c6c-e768-493d-b75b-a330623a3e93",    "fkObjGroup": "1",    "idDor": "17",
        "groupPos": 1,    "shortName": "shortName",    "fullName": "fullName",    "customer": "customer",    "idAuthor": "idAuthor",
        "activeTip": true,    "visibleTip": true,    "privilege": null,    "version": "1.0",    "dateStart": "2020-08-17 12:44:35",
        "dateEnd": "2020-08-22 12:44:35",    "dateCreate": "2020-08-20 14:51:45",    "dateDelete": null,    "corTip": "I",    "listDokladOgl": null
      }
    ];
    //--------------------------------------
  }  
}