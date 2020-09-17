import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DgroupsService } from '../services/dgroups.service';
import { DokladsService } from '../services/doklads.service';
import { Dgroups } from '../models/dgroups';
import { Doklads } from '../models/doklads';
import { SelectItem } from 'primeng/api';
//import { empty } from 'rxjs';
//https://www.primefaces.org/primeng/showcase/#/listbox
//https://www.primefaces.org/primeng/showcase/#/orderlist
//https://www.primefaces.org/primeng/showcase/#/table/edit
//https://www.primefaces.org/primeng/showcase/#/table/reorder
//https://www.primefaces.org/primeng/showcase/#/table/style
//https://www.primefaces.org/primeng/showcase/#/table/crud
//https://stackblitz.com/edit/primeng-tablereorder-demo
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
  val: Date;
  dgroups:Dgroups[]=[];
  dgroupsel:any=[];
  doklads:Doklads[]=[];
  selectedGroup: string;
  privilegesel: any;
  selectedPrivilege: string="КТ";
  version: string="1.0";
  dateStart: string="2020-09-01";
  dateEnd: string="2100-12-31 00:00:00";
  ru: any;
  
  onSubmit() {
    this.listDokladOgl=this.listSelectedForms;
    //console.log(this.doklads); 
    //console.log(this.listSelectedForms); 
  }

  constructor(private route: ActivatedRoute, private dgroupService : DgroupsService, private dokladService : DokladsService, private datePipe: DatePipe) { 
    this.id = route.snapshot.params['id'];
    this.todayDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd H:mm:ss');
    this.dateStart = this.datePipe.transform(new Date(), 'yyyy-MM-dd H:mm:ss');
    this.doklads=[]; //рыба нового доклада
    this.privilegesel=[
      {label:"Общий доступ", value:"Общий доступ"},
      {label:"КТ", value:"КТ"}
    ];
    //-------------------------------------- 
    
   }

  ngOnInit(): void {
    this.ru = {
      firstDayOfWeek: 1,
      dayNames: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
      dayNamesShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
      monthNamesShort: [ "Янв", "Фев", "Мар", "Апр", "Май", "Июн","Июл", "Авг", "Сен", "Окт", "Ноя", "Дек" ],
      dateFormat: "yy-mm-dd",
      closeText: 'Закрыть', 
      prevText: 'Назад', 
      nextText: 'Вперёд', 
      weekHeader: 'Неделя', 
      firstDay: 1, 
      isRTL: false, 
      showMonthAfterYear: true, 
      yearSuffix:'', 
      timeOnlyTitle: 'Только время', 
      timeText: 'Время', 
      hourText: 'Час', 
      minuteText: 'Минута', 
      secondText: 'Секунда', 
      currentText: 'Сегодня', 
      ampm: false, 
      month: 'Месяц', 
      week: 'неделя', 
      day: 'День', 
      allDayText: 'Весь день'
    }; 
 
    this.doklads=this.dokladService.getDoklad(this.id);  
    this.dgroupService.getOptions().then(data => this.dgroupsel = data);
    console.log(this.dgroupsel);     

    this.selectedGroup=this.doklads[0].fkObjGroup;
    this.selectedPrivilege=this.doklads[0].privilege;
    //this.listSelectedForms = [];
    this.listSelectedForms.push(this.doklads[0].listDokladOgl);
    



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

    
  }
}