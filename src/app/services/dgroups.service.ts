﻿import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Dgroups } from '../models/dgroups';
import { TreeNode } from 'primeng/api';
import { SelectItem } from 'primeng/api';

@Injectable()
export class DgroupsService {
  
  private corsHeaders:HttpHeaders;

  constructor(private httpClient: HttpClient) {
     this.corsHeaders=new HttpHeaders({
       'Accept' : 'application/json'
     });
   }

  getAllDgroups(isIncludedDel:boolean,dateReport:string,typeTreeElements:string):any {
    let urlzap:string=`${environment.apiUrl}/objGroup/getAllCentralGroup?typeTreeElements=`+typeTreeElements+`&isIncludedDel=`+isIncludedDel+`&dateReport=`+dateReport;
    urlzap='assets/gr.json';
    return this.httpClient.get<any>(urlzap, { headers: this.corsHeaders })
    .toPromise()
      .then((res) => {
        let raw_json:Dgroups[] = [res];
        let new_node_list: TreeNode[] = [];
        let chld_list: TreeNode[] = [];
        for (let k = 0; k < raw_json.length; k++) {
          if(Array.isArray(raw_json[k].listChildrenObjGroup)){
            chld_list=this.get_subgroup_node(raw_json[k].listChildrenObjGroup);
          }          
          new_node_list.push({
            label: raw_json[k].name,
            data: raw_json[k],
            expandedIcon: "pi pi-folder-open",
            collapsedIcon: "pi pi-folder",
            children: chld_list
          });                    
        };
        return new_node_list || [];
      })
      .catch((res) => {
        console.error(res);
      });
  }

  get_subgroup_node(grdata: Dgroups[]): TreeNode[] {
    let subgr: TreeNode[]=[];
    let subgrn: TreeNode={};    
    for (var i = 0; i < grdata.length; i++)
      {	  
        subgrn.label = grdata[i].name;
        subgrn.data = grdata[i];
        subgrn.expandedIcon = "pi pi-folder-open";
        subgrn.collapsedIcon = "pi pi-folder";
        if(Array.isArray(grdata[i].listChildrenObjGroup)){
          subgrn.children=this.get_subgroup_node(grdata[i].listChildrenObjGroup);
        }
        subgr.push(subgrn);
        subgrn={};
      };
    return subgr || [];
  }

  getOptions(isIncludedDel:boolean,dateReport:string,typeTreeElements:string):any {
    let urlzap:string=`${environment.apiUrl}/objGroup/getAllCentralGroup?typeTreeElements=`+typeTreeElements+`&isIncludedDel=`+isIncludedDel+`&dateReport=`+dateReport;
    urlzap='assets/gr.json';
    return this.httpClient.get<any>(urlzap, { headers: this.corsHeaders })
    .toPromise()
    .then((res) => {
        let raw_json:Dgroups[] = [res];
        let opt_list: SelectItem[]=[];
        for (let k = 0; k < raw_json.length; k++) {  
          if(Array.isArray(raw_json[k].listChildrenObjGroup)){       
            opt_list.push({
              label: raw_json[k].name,
              value: raw_json[k].id
            });
            this.get_subgroup_option(opt_list, raw_json[k].listChildrenObjGroup, "--");
          }                           
        };
        return opt_list || [];
      })
      .catch((res) => {
        console.error(res);
      });
  }

  get_subgroup_option(subgr:SelectItem[], grdata:Dgroups[], ot:string): void {       
    for (var i = 0; i < grdata.length; i++)
      {	  
        subgr.push({label:ot+grdata[i].name, value:grdata[i].id});
        if(Array.isArray(grdata[i].listChildrenObjGroup)){                     
          this.get_subgroup_option(subgr, grdata[i].listChildrenObjGroup, ot+"--");
        }       
      };
  }

}