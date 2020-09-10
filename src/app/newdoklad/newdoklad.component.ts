import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DgroupsService } from '../services/dgroups.service';
import { DokladsService } from '../services/doklads.service';
import { Dgroups, Dgroupsel } from '../models/dgroups';
import { Doklads } from '../models/doklads';
//import { empty } from 'rxjs';

@Component({
  selector: 'app-newdoklad',
  templateUrl: './newdoklad.component.html',
  styleUrls: ['./newdoklad.component.css']
})
export class NewdokladComponent implements OnInit {
  id: string="0";
  listExistingForms: any[];
  listSelectedForms: any[]= new Array();
  listDokladOgl: any[]= new Array();
  todayDate : string;
  dgroups:Dgroups[];
  dgroupsel:Dgroupsel[];
  doklads:Doklads[];
  selectedGroup: string="1";
  privilegesel: any;
  selectedPrivilege: string="КТ";
  version: string="1.0";
  dateStart: string="2020-09-01";
  dateEnd: string="2100-12-31 00:00:00";
  
  onSubmit() {
    this.listDokladOgl=this.listSelectedForms;
    console.log(this.doklads); 
    console.log(this.listSelectedForms); 
  }

  constructor(private route: ActivatedRoute, private dgroupService : DgroupsService, private dokladService : DokladsService, private datePipe: DatePipe) { 
    this.id = route.snapshot.params['id'];
    this.todayDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd H:mm:ss');
    this.dateStart = this.datePipe.transform(new Date(), 'yyyy-MM-dd H:mm:ss');
    this.doklads=[{
      "id": null,    
      "idDokladChain": null,    
      "fkObjGroup": "1",    
      "idDor": null,
      "groupPos": 1,    
      "shortName": "Доклад, краткое название",    
      "fullName": "Доклад, полное название",    
      "customer": "Ф.И.О. заказчика, №приказа, контакты",    
      "idAuthor": null,
      "activeTip": null,    
      "visibleTip": true,    
      "privilege": null,    
      "version": "1.0",    
      "dateStart": this.dateStart,
      "dateEnd": this.dateEnd,    
      "dateCreate": this.dateStart,    
      "dateDelete": null,    
      "corTip": "I",    
      "listDokladOgl": null
    }]; //рыба нового доклада
   }

  ngOnInit(): void {
    this.dokladService.getDoklad(this.id);
    this.dgroupService.getAllDgroups(true, this.todayDate, 'doklad');     
 
    this.privilegesel=[
      {label:"Общий доступ", value:"Общий доступ"},
      {label:"КТ", value:"КТ"}
    ];
    //-------------------------------------- 
    
    this.doklads=[{
        "id": "8a488b44740b8ec701740b8fe5e30000",    
        "idDokladChain": "889d5d92-48aa-440f-9f86-bfa0e9451c8d",    
        "fkObjGroup": "1",    
        "idDor": "17",
        "groupPos": 1,    
        "shortName": "short Name",    
        "fullName": "full Name",    
        "customer": "customer",    
        "idAuthor": "idAuthor",
        "activeTip": null,    
        "visibleTip": true,    
        "privilege": null,    
        "version": "1.0",    
        "dateStart": "2020-08-17 12:44:35",
        "dateEnd": "2020-08-22 12:44:35",    
        "dateCreate": "2020-08-20 14:10:13",    
        "dateDelete": null,    
        "corTip": "I",    
        "listDokladOgl": [{
          "id": "1",
          "idFormChain": "1",
          "fkObjGroup": "1",
          "idDor": "1",
          "pos": 1,
          "name": "1",
          "description": "1",
          "typeForm": "1",
          "idAuthor": "1",
          "activeTip": true,
          "visibleTip": null,
          "privilege": null,
          "version": "1",
          "dateStart": "2020-07-27 13:45:00",
          "dateEnd": "2020-07-29 13:45:00",
          "dateCreate": "2020-09-29 13:45:00",
          "dateDelete": null,
          "corTip": "I",
          "listFormMark": [],
          "listNumericalPokValue": []
        }]
      }];
      

      this.selectedGroup=this.doklads[0].fkObjGroup;
      this.selectedPrivilege=this.doklads[0].privilege;
      this.listSelectedForms.push(this.doklads[0].listDokladOgl);


    this.dgroupsel=[
        { "label": "10",          "value": "1"        },
        { "label": "8a488b44739ff16201739ff22d0e0001",          "value": "2"        },
        { "label": "8a488b4473a026e40173a02b306b0000",          "value": "3"        }
      ];

    this.listExistingForms = [
      {
        "id": "1",
        "idFormChain": "1",
        "fkObjGroup": "1",
        "idDor": "1",
        "pos": 1,
        "name": "1",
        "description": "1",
        "typeForm": "1",
        "idAuthor": "1",
        "activeTip": true,
        "visibleTip": null,
        "privilege": null,
        "version": "1",
        "dateStart": "2020-07-27 13:45:00",
        "dateEnd": "2020-07-29 13:45:00",
        "dateCreate": "2020-09-29 13:45:00",
        "dateDelete": null,
        "corTip": "I",
        "listFormMark": [],
        "listNumericalPokValue": []
      },
      {
        "id": "8a488b4473b45d880173b45db5730000",
        "idFormChain": "1",
        "fkObjGroup": "1",
        "idDor": "1",
        "pos": 1,
        "name": "1",
        "description": "1",
        "typeForm": "1",
        "idAuthor": "1",
        "activeTip": true,
        "visibleTip": true,
        "privilege": null,
        "version": "1",
        "dateStart": "2020-08-03 15:48:26",
        "dateEnd": "2020-08-03 15:48:26",
        "dateCreate": "2020-08-03 15:48:26",
        "dateDelete": null,
        "corTip": "I",
        "listFormMark": [],
        "listNumericalPokValue": []
      },
      {
        "id": "8a488b4473b45d880173b45ec4350001",
        "idFormChain": "1",
        "fkObjGroup": "1",
        "idDor": "1",
        "pos": 1,
        "name": "1",
        "description": "1",
        "typeForm": "1",
        "idAuthor": "1",
        "activeTip": true,
        "visibleTip": true,
        "privilege": null,
        "version": "1",
        "dateStart": "2020-08-03 15:49:36",
        "dateEnd": "2020-08-03 15:49:36",
        "dateCreate": "2020-08-03 15:49:36",
        "dateDelete": null,
        "corTip": "I",
        "listFormMark": [],
        "listNumericalPokValue": []
      },
      {
        "id": "8a488b4473b461710173b4618a420000",
        "idFormChain": "1",
        "fkObjGroup": "1",
        "idDor": "1",
        "pos": 1,
        "name": "1",
        "description": "1",
        "typeForm": "1",
        "idAuthor": "1",
        "activeTip": true,
        "visibleTip": true,
        "privilege": null,
        "version": "1",
        "dateStart": "2020-08-03 15:52:38",
        "dateEnd": "2020-08-03 15:52:38",
        "dateCreate": "2020-08-03 15:52:38",
        "dateDelete": null,
        "corTip": "I",
        "listFormMark": [],
        "listNumericalPokValue": []
      },
      {
        "id": "8a488b4473b461710173b462b0b00001",
        "idFormChain": "1",
        "fkObjGroup": "1",
        "idDor": "1",
        "pos": 1,
        "name": "1",
        "description": "1",
        "typeForm": "1",
        "idAuthor": "1",
        "activeTip": true,
        "visibleTip": true,
        "privilege": null,
        "version": "1",
        "dateStart": "2020-08-03 15:53:53",
        "dateEnd": "2020-08-03 15:53:53",
        "dateCreate": "2020-08-03 15:53:53",
        "dateDelete": null,
        "corTip": "I",
        "listFormMark": [],
        "listNumericalPokValue": []
      }];
    this.listSelectedForms = [];
  }

}