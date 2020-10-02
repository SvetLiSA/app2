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

@Component({
  selector: 'app-newdoklad',
  templateUrl: './newdoklad.component.html',
  styleUrls: ['./newdoklad.component.css']
})
export class NewdokladComponent implements OnInit {
  id: string="0";
  listExistingForms: any=[];
  listSelectedForms: any=[];
  listDokladOgl: any=[];
  listDoklad: any=[];
  dgroupsel: any=[];
  cols: any=[];
  privilegesel: any;
  ru: any;
  dgroups: Dgroups[]=[];
  doklads: Doklads[]=[];
  uploadedFiles: File;
  todayDate: string;
  dokladsDTO: string;
  reason: string;
  selectedGroup: string;
  selectedPrivilege: string;
  dateStart: string;
  dateEnd: string="2100-12-31 00:00:00";
  reportHour:number=1;
  //fgroupsel: any=[];
  //val: Date;
  //grId: string;
  //version: string="1.0";

  constructor(private route: ActivatedRoute, 
              private dgroupService : DgroupsService,  
              private dokladService : DokladsService, 
              private datePipe: DatePipe) { 
    this.id = route.snapshot.params['id'];
    //, private messageService: MessageService
    this.todayDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd H:mm:ss');
    this.dateStart = this.datePipe.transform(new Date(), 'yyyy-MM-dd H:mm:ss');
    this.privilegesel=[
      { label:"Выбрать...", value: 0 },
      { label:"Общий доступ", value: 1 },
      { label:"КТ", value: 2 }
    ];
    //--------------------------------------    
    this.dgroupService.getOptions(true, this.todayDate, 'doklad').then(res => this.dgroupsel = res);
    this.dgroupService.getAllForms(true, this.todayDate).then(data => this.listExistingForms = data );
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
      { field: 'grName', header: 'Группа' },
      { field: 'name', header: 'Название отчёта' },
      { field: 'activeTip',  header: 'Активен?' },
      { field: 'visibleTip', header: 'Опубл.?' },
      { field: 'listPos', header: '№пп' }
    ];

    if(this.id)
    {
      this.dokladService.getDoklad(this.id).then(data => {         
        this.doklads = data; 
        setTimeout(() => {   
          this.dgroupService.getOptions(true, this.todayDate, 'doklad').then(res => this.dgroupsel = res );             
          this.selectedPrivilege = this.privilegesel[this.privilegesel.findIndex(obj => obj.value === this.doklads[0].privilege)];
          this.selectedGroup=this.dgroupsel[this.dgroupsel.findIndex(obj => obj.value === this.doklads[0].fkObjGroup)]; 
          if(Array.isArray(this.doklads[0].listDokladOgl)) {
            for (let k = 0; k < this.doklads[0].listDokladOgl.length; k++) {
              if(Array.isArray(this.doklads[0].listDokladOgl[k].listDokladLinkForm)) {
                if (this.listExistingForms.findIndex(obj => obj.id === this.doklads[0].listDokladOgl[k].listDokladLinkForm[0].id) != -1)
                {
                  this.listSelectedForms.push(this.listExistingForms[this.listExistingForms.findIndex(obj => obj.id === this.doklads[0].listDokladOgl[k].listDokladLinkForm[0].id)]);
                }
                //console.log(this.listSelectedForms);
              }              
            }
          }

        }, 1000);
      });       
    }
    else
    {      
      this.doklads = this.dokladService.emptyDoklad();
      //this.listSelectedForms = [];
    }
    
  } //onInit

  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles=file;
    }
  }

  changeGroup(changedValue){ this.doklads[0].fkObjGroup=changedValue.value; }  
  changeDts(changedValue:string){ this.doklads[0].dateStart=new Date(changedValue); }  
  changeDte(changedValue:string){ this.doklads[0].dateEnd=new Date(changedValue); }  
  changePriv(changedValue){ this.doklads[0].privilege=changedValue.value; }

  deleteUnSelectedForms() {
    this.listExistingForms = this.listExistingForms.filter(val => this.listSelectedForms.includes(val));
    this.listSelectedForms = [];    
    for (let k = 0; k < this.listExistingForms.length; k++) {
      this.listExistingForms[k].list="Лист"+(k+1);
      this.listExistingForms[k].listPos=k+1;
    }
  }

  showDoklad(idf:string) {
    console.log(idf);
  }

  onSubmit() {
    this.listDokladOgl=[];
    for (let k = 0; k < this.listExistingForms.length; k++) {
      this.listDokladOgl.push({
        listName : this.listExistingForms[k].list,
        listPos : this.listExistingForms[k].listPos,
        oglName : this.listExistingForms[k].oglName,
        listDokladLinkForm : [{
          idFormChain : this.listExistingForms[k].id,
          reportHour : this.reportHour
        }]
      });
      this.listDoklad=[];
      this.listDoklad.push({
        customer : this.doklads[0].customer,
        dateEnd : this.datePipe.transform(this.doklads[0].dateEnd, 'yyyy-MM-dd H:mm:ss'),
        dateStart : this.datePipe.transform(this.doklads[0].dateStart, 'yyyy-MM-dd H:mm:ss'),
        fkObjGroup : this.doklads[0].fkObjGroup,
        fullName : this.doklads[0].fullName,
        groupPos : this.doklads[0].groupPos,
        idDor : this.doklads[0].idDor,
        privilege : this.doklads[0].privilege,
        shortName : this.doklads[0].shortName,
        listDokladOgl : this.listDokladOgl
      });
      //version : this.doklads[0].version,
    }
    this.dokladsDTO=JSON.stringify(this.listDoklad);
    console.log(this.dokladsDTO);
    this.dokladService.newDoklad(this.dokladsDTO, this.uploadedFiles, this.reason);
  }

}