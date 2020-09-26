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
  dokladsDTO:string;
  reason:string;
  selectedGroup: string;
  privilegesel: any;
  selectedPrivilege: string;
  version: string="1.0";
  dateStart: string;
  dateEnd: string="2100-12-31 00:00:00";
  uploadedFiles: File;
  ru: any;
  cols: any[];

  constructor(private route: ActivatedRoute, 
              private dgroupService : DgroupsService,  
              private dokladService : DokladsService, 
              private datePipe: DatePipe) { 
    this.id = route.snapshot.params['id'];
    //, private messageService: MessageService
    this.todayDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd H:mm:ss');
    this.dateStart = this.datePipe.transform(new Date(), 'yyyy-MM-dd H:mm:ss');
    this.privilegesel=[
      { label:"Общий доступ", value: 1 },
      { label:"КТ", value: 2 }
    ];
    //--------------------------------------
    this.dgroupService.getOptions(true, this.todayDate, 'doklad').then(data => this.dgroupsel = data);   
    this.dgroupService.getAllForms(true, this.todayDate).then(data => this.listExistingForms = data);
    //this.listExistingForms = this.fgroupsel;
    
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
      { field: 'visibleTip', header: 'Опубл.?' }     
      //,{ field: 'id', header: 'ID' }
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
      //console.log("nnn");
      this.selectedGroup=this.doklads[0].fkObjGroup;
      //this.dgroupsel.value=this.selectedGroup;
      this.selectedPrivilege=this.doklads[0].privilege;
      //this.privilegesel.value=this.selectedPrivilege;
      //console.log(this.selectedPrivilege);
      this.listSelectedForms.push(this.doklads[0].listDokladOgl);
    }
    
    

  }

  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles=file;
    }
  }

  changeGroup(changedValue){
    console.log(changedValue.value);
    this.doklads[0].fkObjGroup=changedValue.value;
  }
  
  changePriv(changedValue){
    console.log(changedValue.value);
    this.doklads[0].privilege=changedValue.value;
  }

  deleteUnSelectedForms() {
    this.listExistingForms = this.listExistingForms.filter(val => this.listSelectedForms.includes(val));
    this.listSelectedForms = null;    
    for (let k = 0; k < this.listExistingForms.length; k++) {
      this.listExistingForms[k].list="Лист"+(k+1);
    }
  }

  showDoklad(idf:string) {
    console.log(idf);
  }

  onSubmit() {
    console.log(this.listExistingForms);

    /*
    {"customer":"Заказчик",
     "dateEnd":"2120-12-31 14:50:47",
     "dateStart":"2020-09-24 14:50:47",
     "fkObjGroup":"1",
     "fullName":"Диспетчерский доклад",
     "groupPos":"1",
     "idDor":"61",
     "privilege":1,
     "shortName":"ДД",
     "version":"1.0",
     "listDokladOgl":
        [{"listName":"лист1",
          "listPos":1,
          "oglName":"Справка",
          "listDokladLinkForm":[{"idFormChain": "1","reportHour": 10}]
        }]
    }
    */
    this.listDokladOgl=this.listSelectedForms;
    //this.dokladsDTO=JSON.stringify(this.listExistingForms);
    this.dokladService.newDoklad(this.dokladsDTO, this.uploadedFiles, this.reason);
    //console.log(this.doklads); 
    //console.log(this.listSelectedForms); 
  }


}