import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DgroupsService } from '../services/dgroups.service';
import { DokladsService } from '../services/doklads.service';
import { Dgroups } from '../models/dgroups';
import { Doklads } from '../models/doklads';

@Component({
  selector: 'app-newdoklad',
  templateUrl: './newdoklad.component.html',
  styleUrls: ['./newdoklad.component.css']
})
export class NewdokladComponent implements OnInit {
  id: string;
  listExistingForms: any[];
  listSelectedForms: any[];
  todayDate : string;
  dgroups:Dgroups[];
  doklads:Doklads[];
  selectedGroup: string;

  newdoklForm = new FormGroup({
    'fkObjGroup' : new FormControl('', Validators.required),
    'fullName' : new FormControl('', Validators.required),
    'shortName' : new FormControl('', Validators.required),
    'groupPos' : new FormControl('', Validators.required)
  });

  constructor(private route: ActivatedRoute, private dgroupService : DgroupsService, private dokladService : DokladsService, private datePipe: DatePipe) { 
    this.id = route.snapshot.params['id'];
    this.todayDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd h:i:s');
   }

  ngOnInit(): void {
    this.dokladService.getDoklad(this.id);
    this.dgroupService.getAllDgroups(true, this.todayDate);
    

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
      "listDokladOgl": null
    }];

    this.dgroups=[
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

  onSubmit() {
    // TODO: Use EventEmitter with form value  
    console.warn(this.newdoklForm.value);
  }
}