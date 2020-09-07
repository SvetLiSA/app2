import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DokladsService } from '../services/doklads.service';
import { Doklads } from '../models/doklads';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-editdoklad',
  templateUrl: './editdoklad.component.html',
  styleUrls: ['./editdoklad.component.css']
})

export class EditdokladComponent implements OnInit {
  id: string; 
  doklads:Doklads[];  
  title = 'Изменить параметры доклада';
  todayDate: string;

  constructor(private datePipe: DatePipe, private route: ActivatedRoute, private dokladService : DokladsService) {
    this.id = route.snapshot.params['id'];
    this.todayDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd h:i:s');
   }

  ngOnInit(): void {
    this.dokladService.getDoklad(this.id); 

    //--------------------------------------
    this.doklads=[
      {
        "id": "8a488b44740b8ec701740b8fe5e30000",    
        "idDokladChain": "889d5d92-48aa-440f-9f86-bfa0e9451c8d",   
         "fkObjGroup": "1",    
         "idDor": "17",
        "groupPos": 1,    
        "shortName": "shortName",    
        "fullName": "fullName",    
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
      }
    ];
    //--------------------------------------
  }

  pubDoklad(){
    this.dokladService.setActiveDoklad(this.id); 
    console.log('pub');
  }

  unpubDoklad(){
    this.dokladService.setInactiveDoklad(this.id); 
    console.log('unpub');
  }

  renameDoklad(){
    //this.dokladService.renameDoklad(this.id,fn,sn); 
    console.log('rename');
  }

  delDoklad(){
    //this.dokladService.deleteDoklad(this.id,reason); 
    console.log('del');
  }

  moveDoklad(){
    //this.dokladService.moveDoklad(this.id,gr,pos); 
    console.log('move');
  }

}
