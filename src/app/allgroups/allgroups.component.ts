import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DgroupsService } from '../services/dgroups.service';
import { Dgroups } from '../models/dgroups';

@Component({
  selector: 'app-allgroups',
  templateUrl: './allgroups.component.html',
  styleUrls: ['./allgroups.component.css']
})

export class AllgroupsComponent implements OnInit {
  dgroups:Dgroups[];

  title = 'Список основных групп докладов';
  todayDate: string;
  //todayString : string = new Date().toDateString();

  constructor(private dgroupService : DgroupsService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.todayDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd h:i:s');
    this.dgroupService.getAllDgroups(true, this.todayDate); 

    //--------------------------------------
    this.dgroups=[{
      "id": "1",
      "fkObjGroup": null,
      "objType": "1",
      "name": "группа 1",
      "pos": 1,
      "idDor": "1",
      "idAuthorCreate": "1",
      "idAuthorDelete": "1",
      "activeTip": null,
      "privilege": null,
      "dateCreate": "2020-09-27 13:45:00",
      "dateDelete": null,
      "corTip": "I",
      "listChildrenObjGroup": [
        {
          "id": "8a488b44739ff16201739ff1a3530000",
          "fkObjGroup": "1",
          "objType": "2",
          "name": "2",
          "pos": 1,
          "idDor": "2",
          "idAuthorCreate": "2",
          "idAuthorDelete": "2",
          "activeTip": false,
          "privilege": null,
          "dateCreate": "2020-07-30 13:11:02",
          "dateDelete": null,
          "corTip": "I",
          "listChildrenObjGroup": []
        },
        {
          "id": "8a488b44739ff16201739ff22d0e0001",
          "fkObjGroup": "1",
          "objType": "2",
          "name": "s555",
          "pos": 1,
          "idDor": "2",
          "idAuthorCreate": "2",
          "idAuthorDelete": "2",
          "activeTip": false,
          "privilege": null,
          "dateCreate": "2020-07-30 13:11:02",
          "dateDelete": null,
          "corTip": "I",
          "listChildrenObjGroup": []
        },
        {
          "id": "8a488b4473a026e40173a02b306b0000",
          "fkObjGroup": "1",
          "objType": "2",
          "name": "2",
          "pos": 1,
          "idDor": "2",
          "idAuthorCreate": "2",
          "idAuthorDelete": "2",
          "activeTip": false,
          "privilege": null,
          "dateCreate": "2020-07-30 13:11:02",
          "dateDelete": null,
          "corTip": "I",
          "listChildrenObjGroup": []
        },
        {
          "id": "8a488b4473a1a4b20173a1a614de0004",
          "fkObjGroup": "1",
          "objType": "string",
          "name": "string",
          "pos": 0,
          "idDor": "string",
          "idAuthorCreate": "string",
          "idAuthorDelete": "string",
          "activeTip": true,
          "privilege": null,
          "dateCreate": "2020-07-30 15:35:07",
          "dateDelete": null,
          "corTip": "I",
          "listChildrenObjGroup": []
        },
        {
          "id": "8a488b4473e23aa80173e23c4bfd0001",
          "fkObjGroup": "1",
          "objType": "string",
          "name": "string",
          "pos": 0,
          "idDor": "string",
          "idAuthorCreate": "string",
          "idAuthorDelete": "string",
          "activeTip": true,
          "privilege": null,
          "dateCreate": "2020-08-12 10:32:52",
          "dateDelete": null,
          "corTip": "I",
          "listChildrenObjGroup": []
        },
        {
          "id": "8a488b4473e23d310173e23d48be0000",
          "fkObjGroup": "1",
          "objType": "string",
          "name": "string",
          "pos": 0,
          "idDor": "string",
          "idAuthorCreate": "string",
          "idAuthorDelete": "string",
          "activeTip": true,
          "privilege": null,
          "dateCreate": "2020-08-12 10:32:52",
          "dateDelete": null,
          "corTip": "I",
          "listChildrenObjGroup": []
        },
        {
          "id": "8a488b4473e240420173e2405d750000",
          "fkObjGroup": "1",
          "objType": "string",
          "name": "string",
          "pos": 0,
          "idDor": "string",
          "idAuthorCreate": "string",
          "idAuthorDelete": "string",
          "activeTip": true,
          "privilege": null,
          "dateCreate": "2020-08-12 10:32:52",
          "dateDelete": null,
          "corTip": "I",
          "listChildrenObjGroup": []
        }
      ]
    }];
    /*[
    { "active_tip":true, "cor_tip":"I", "date_create":"2020-07-16", "date_delete":"",
      "fk_obj_group":"1", "id":"1", "id_author_create":"user1", "id_author_delete":"", "id_dor":"61",
      "name":"Группа докладов по основным показателям работы", "obj_type":"G", "pos":1, "privilege":"vk" },   
    {"active_tip":true, "cor_tip":"I", "date_create":"2020-07-16", "date_delete":"",
      "fk_obj_group":"1", "id":"2", "id_author_create":"user1", "id_author_delete":"", "id_dor":"61",
      "name":"Группа Безопасность движения", "obj_type":"G", "pos":2, "privilege":"vk" }, 
    {"active_tip":true, "cor_tip":"I", "date_create":"2020-07-16", "date_delete":"",
      "fk_obj_group":"1", "id":"3", "id_author_create":"user1", "id_author_delete":"", "id_dor":"61",
      "name":"Группа Охрана труда", "obj_type":"G", "pos":3, "privilege":"vk" }, 
    {"active_tip":true, "cor_tip":"I", "date_create":"2020-07-16", "date_delete":"",
      "fk_obj_group":"1", "id":"4", "id_author_create":"user2", "id_author_delete":"", "id_dor":"61",
      "name":"Группа Аналитических отчётов", "obj_type":"G", "pos":4, "privilege":"vk" },
      { "active_tip":true, "cor_tip":"I", "date_create":"2020-07-16", "date_delete":"",
        "fk_obj_group":"1", "id":"5", "id_author_create":"user1", "id_author_delete":"", "id_dor":"61",
        "name":"Группа докладов по термометрии", "obj_type":"G", "pos":1, "privilege":"vk" },   
      {"active_tip":true, "cor_tip":"I", "date_create":"2020-07-16", "date_delete":"",
        "fk_obj_group":"1", "id":"7", "id_author_create":"user1", "id_author_delete":"", "id_dor":"61",
        "name":"Группа отчётов НКИ", "obj_type":"G", "pos":2, "privilege":"vk" }, 
      {"active_tip":true, "cor_tip":"I", "date_create":"2020-07-16", "date_delete":"",
        "fk_obj_group":"1", "id":"8", "id_author_create":"user1", "id_author_delete":"", "id_dor":"61",
        "name":"Группа Кадры", "obj_type":"G", "pos":3, "privilege":"vk" }, 
      {"active_tip":true, "cor_tip":"I", "date_create":"2020-07-16", "date_delete":"",
        "fk_obj_group":"1", "id":"14", "id_author_create":"user2", "id_author_delete":"", "id_dor":"61",
        "name":"Группа Ежегодных докладов", "obj_type":"G", "pos":4, "privilege":"vk" } ,
        { "active_tip":true, "cor_tip":"I", "date_create":"2020-07-16", "date_delete":"",
          "fk_obj_group":"1", "id":"15", "id_author_create":"user1", "id_author_delete":"", "id_dor":"61",
          "name":"Группа докладов по РБ", "obj_type":"G", "pos":1, "privilege":"vk" },   
        {"active_tip":true, "cor_tip":"I", "date_create":"2020-07-16", "date_delete":"",
          "fk_obj_group":"1", "id":"16", "id_author_create":"user1", "id_author_delete":"", "id_dor":"61",
          "name":"Группа докладов службы П", "obj_type":"G", "pos":2, "privilege":"vk" }, 
        {"active_tip":true, "cor_tip":"I", "date_create":"2020-07-16", "date_delete":"",
          "fk_obj_group":"1", "id":"18", "id_author_create":"user1", "id_author_delete":"", "id_dor":"61",
          "name":"Группа еженедельных", "obj_type":"G", "pos":3, "privilege":"vk" }, 
        {"active_tip":true, "cor_tip":"I", "date_create":"2020-07-16", "date_delete":"",
          "fk_obj_group":"1", "id":"19", "id_author_create":"user2", "id_author_delete":"", "id_dor":"61",
          "name":"Группа Доклады о метериалах", "obj_type":"G", "pos":4, "privilege":"vk" }      
    ]; */
    //--------------------------------------

  }
}
