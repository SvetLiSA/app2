import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DgroupsService } from '../services/dgroups.service';
import { DokladsService } from '../services/doklads.service';
import { Doklads } from '../models/doklads';
import { PrimeNGConfig } from 'primeng/api';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-editdoklad',
  templateUrl: './editdoklad.component.html',
  styleUrls: ['./editdoklad.component.css']
})

export class EditdokladComponent implements OnInit {
  id: string; 
  doklads:Doklads[]=[];  
  dgroupsel:any=[];
  grsel:string;
  selectedGroup: string;
  title = 'Изменить параметры доклада';
  todayDate: string;
  displayM1: boolean;
  displayM2: boolean;
  displayM3: boolean;
  reason:string;

  constructor(private datePipe: DatePipe, private route: ActivatedRoute, private dgroupService : DgroupsService, private dokladService : DokladsService,private primengConfig: PrimeNGConfig) {
    this.id = route.snapshot.params['id'];
    this.todayDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd H:mm:ss');
   }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.displayM1=false;
    this.displayM2=false;
    this.displayM3=false;
    this.reason="Приказ №";
    this.doklads=this.dokladService.getDoklad(this.id);  
    this.grsel=this.doklads[0].fkObjGroup;   
    this.dgroupService.getOptions().then(data => this.dgroupsel = data);

  }

  pubDoklad(){
    this.dokladService.setActiveDoklad(this.id); 
    this.doklads[0].visibleTip=true; 
    console.log('pub');
  }

  unpubDoklad(){
    this.dokladService.setInactiveDoklad(this.id); 
    this.doklads[0].visibleTip=false;
    console.log('unpub');
  }

  dlgRenameDoklad(){
    this.displayM1=true;
  }

  renameDoklad(){
    this.displayM1=false;
    this.dokladService.renameDoklad(this.id,this.doklads[0].fullName,this.doklads[0].shortName); 
    console.log('rename');
  }

  dlgMoveDoklad(){
    this.displayM2=true;
  }

  moveDoklad(){
    this.displayM2=false;
    this.dokladService.moveDoklad(this.id,this.grsel,this.doklads[0].groupPos); 
    this.doklads[0].fkObjGroup=this.grsel; //this.displayM2.valueOf["fkObjGroup"];
    console.log('move');
  }

  dlgDelDoklad(){
    this.displayM3=true;
  }

  delDoklad(){
    this.displayM3=false;
    this.dokladService.deleteDoklad(this.id,this.reason); 
    this.doklads[0].dateDelete=this.todayDate;
    console.log('del');
  }

}
