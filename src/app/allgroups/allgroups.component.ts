import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DgroupsService } from '../services/dgroups.service';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-allgroups',
  templateUrl: './allgroups.component.html',
  styleUrls: ['./allgroups.component.css']
})

export class AllgroupsComponent implements OnInit {
  dgrtree: TreeNode[] = [];
  title = 'Список основных групп докладов';
  todayDate: string;

  constructor(private dgroupService : DgroupsService, private datePipe: DatePipe) {   }

  ngOnInit() {
    this.todayDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd'); // H:mm:ss
    this.dgroupService.getAllDgroups(true, this.todayDate, 'doklad').then(data => this.dgrtree = data);
  }
    
  expandAll(){
    this.dgrtree.forEach( node => {
        this.expandRecursive(node, true);
    } );
  }

  collapseAll(){
    this.dgrtree.forEach( node => {
        this.expandRecursive(node, false);
    } );
  }

  private expandRecursive(node:TreeNode, isExpand:boolean){
    node.expanded = isExpand;
    if (node.children){
        node.children.forEach( childNode => {
            this.expandRecursive(childNode, isExpand);
        } );
    }
  }

}