import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DgroupsService } from '../services/dgroups.service';
import { DokladsService } from '../services/doklads.service';
import { DformsService } from '../services/dforms.service';
import { Dgroups } from '../models/dgroups';
import { Doklads } from '../models/doklads';
import { SelectItem } from 'primeng/api';
//import { empty } from 'rxjs';

@Component({
  selector: 'app-newdoklad',
  templateUrl: './newdoklad.component.html',
  styleUrls: ['./newdoklad.component.css']
})
export class NewdokladComponent implements OnInit {
  id: string="0";
  listExistingForms: any=[];
  listForms: any=[];
  listSelectedForms: any=[];
  listDokladOgl: any=[];
  todayDate : string;
  val: Date;
  dgroups:Dgroups[]=[];
  dgroupsel:any=[];
  fgroupsel:any=[];
  grId:string;
  doklads:Doklads[]=[];
  selectedGroup: string;
  privilegesel: any;
  selectedPrivilege: string;
  version: string="1.0";
  dateStart: string;
  dateEnd: string="2100-12-31 00:00:00";
  uploadedFiles: any[] = [];
  ru: any;
  cols: any[];

  constructor(private route: ActivatedRoute, 
              private dgroupService : DgroupsService, 
              private dformsService : DformsService, 
              private dokladService : DokladsService, 
              private datePipe: DatePipe) { 
    this.id = route.snapshot.params['id'];
    //, private messageService: MessageService
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
 
    this.cols = [      
      { field: 'id', header: '#' },
      { field: 'pos', header: '№' },
      { field: 'idFormChain', header: 'ID' },
      { field: 'fkObjGroup', header: '№ группы' },
      { field: 'name', header: 'Название отчёта' }
    ];

    if(this.id)
    {
      this.dokladService.getDoklad(this.id).then(data => this.doklads = data);
    }
    else
    {      
      this.doklads = this.dokladService.emptyDoklad();
      this.listSelectedForms = [];
    }
    
    if(this.doklads[0])
    {
      console.log("nnn");
      this.selectedGroup=this.doklads[0].fkObjGroup;
      this.dgroupsel.value=this.selectedGroup;
      this.selectedPrivilege=this.doklads[0].privilege;
      this.privilegesel.value=this.selectedPrivilege;
      console.log(this.selectedPrivilege);
      this.listSelectedForms.push(this.doklads[0].listDokladOgl);
    }
    
    this.dgroupService.getOptions(true, this.todayDate, 'form').then(data => this.fgroupsel = data);
    for (let k = 0; k < this.fgroupsel.length; k++) {  
      if(Array.isArray(this.fgroupsel[k])){ 
        this.grId=this.fgroupsel[k].value;
        this.dformsService.getAllDforms(this.grId, true, this.fgroupsel[k].label).then(data => this.listForms = data);
        this.listExistingForms.concat(this.listForms);
      }
    }

    this.dgroupService.getOptions(true, this.todayDate, 'doklad').then(data => this.dgroupsel = data);
    //console.log(this.dgroupsel);   
    
  }

  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
  }

  changeGroup(changedValue){
    console.log(changedValue.value);
    this.doklads[0].fkObjGroup=changedValue.value;
  }
  
  changePriv(changedValue){
    console.log(changedValue.value);
    this.doklads[0].privilege=changedValue.value; //label?
  }

  deleteUnSelectedForms() {
    this.listExistingForms = this.listExistingForms.filter(val => this.listSelectedForms.includes(val));
    this.listSelectedForms = null;
  }

  onSubmit() {
    this.listDokladOgl=this.listSelectedForms;
    //console.log(this.doklads); 
    //console.log(this.listSelectedForms); 
  }


}