import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DokladsService } from '../services/doklads.service';
import { Doklads } from '../models/doklads';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-formsingr',
  templateUrl: './formsingr.component.html',
  styleUrls: ['./formsingr.component.css']
})

export class FormsingrComponent implements OnInit {
  id: string;
  doklads:Doklads[];  
  title = 'Список докладов в группе';
  tabs:SelectItem[];
  tabvalues:string='1';
  todayDate: string;

  constructor(private datePipe: DatePipe, private route: ActivatedRoute, private dokladService : DokladsService) { 
    this.id = route.snapshot.params['id'];
    this.tabs = [
      {label: 'Активные доклады', value: '1'}, 
      {label: 'Только опубликованные', value: '2'}, 
      {label: 'Все (с удалёнными)', value: '3', disabled : false}
    ];
    this.todayDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd H:mm:ss');
  }
    
  public paramChange(obj:any){
    console.log(obj.value);
    switch(obj.value){
      case "1": this.dokladService.getAllDoklads(this.id,false).then(data => this.doklads = data); break;
      case "2": this.dokladService.getPublishedDoklads(this.id,true,this.todayDate).then(data => this.doklads = data); break;
      case "3": this.dokladService.getAllDoklads(this.id,true).then(data => this.doklads = data); break;
    }
  }

  ngOnInit() {      
    //this.dokladService.getAllDoklads(this.id,false);    
    this.dokladService.getAllDoklads(this.id,false).then(data => this.doklads = data);
  }  
}