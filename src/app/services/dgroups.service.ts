import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Dgroups } from '../models/dgroups';
import { Dforms } from '../models/dforms';
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
    //urlzap='assets/gr.json';
    return this.httpClient.get<any>(urlzap)
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
    //urlzap='assets/gr.json';
    return this.httpClient.get<any>(urlzap)
    .toPromise()
    .then((res) => {
        let raw_json:Dgroups[] = [res];
        let opt_list: SelectItem[]=[];
        for (let k = 0; k < raw_json.length; k++) {  
          if(Array.isArray(raw_json[k].listChildrenObjGroup)){ 
            raw_json[k].activeTip ?  
            opt_list.push({
              label: raw_json[k].name,
              value: raw_json[k].id
            })
            :     
            opt_list.push({
              label: raw_json[k].name,
              value: raw_json[k].id,
              disabled: true
            });
            this.get_subgroup_option(opt_list, raw_json[k].listChildrenObjGroup, "--");
          }                           
        };
        //console.log(opt_list);
        return opt_list || [];
      })
      .catch((res) => {
        console.error(res);
      });
  }

  get_subgroup_option(subgr:SelectItem[], grdata:Dgroups[], ot:string): void {       
    for (var i = 0; i < grdata.length; i++)
      {	 
        grdata[i].activeTip ?  
        subgr.push({
          label:ot+grdata[i].name, 
          value: grdata[i].id
        })
        :
        subgr.push({
          label:ot+grdata[i].name, 
          value: grdata[i].id,
          disabled: true
        });
        if(Array.isArray(grdata[i].listChildrenObjGroup)){                     
          this.get_subgroup_option(subgr, grdata[i].listChildrenObjGroup, ot+"--");
        }       
      };
  }

  getAllForms(isIncludedDel:boolean,dateReport:string):any {
    let typeTreeElements:string='form';
    let urlzap:string=`${environment.apiUrl}/objGroup/getAllCentralGroup?typeTreeElements=`+typeTreeElements+`&isIncludedDel=`+isIncludedDel+`&dateReport=`+dateReport;
    //urlzap='assets/grf.json';
    return this.httpClient.get<any>(urlzap)
    .toPromise()
    .then((res) => {
        let raw_json:Dgroups[] = [res];
        let opt_list: SelectItem[]=[];
        for (let k = 0; k < raw_json.length; k++) {  
          if(Array.isArray(raw_json[k].listChildrenObjGroup)){       
            opt_list.push({
              label: raw_json[k].name,
              value: raw_json[k].id,
              disabled: !raw_json[k].activeTip
            });
            this.get_subgroup_option(opt_list, raw_json[k].listChildrenObjGroup, "--");
          }                           
        }; //for

        let listForms:any=[];
        let grId:string;
        let urlzap2:string;
        for (let k0 = 0; k0 < opt_list.length; k0++) { 
          grId=opt_list[k0].value;
          urlzap2=`${environment.apiUrl}/form/getListByObjGroupId?idObjGroup=`+grId+`&isIncludedDel=true`;
          //urlzap2='assets/forms.json'
          this.httpClient.get<Dforms[]>(urlzap2)
          .subscribe((res2) => {
              let raw_json:Dforms[] = res2;
              for (let k = 0; k < raw_json.length; k++) {
                listForms.push({
                  id: raw_json[k].id,
                  idFormChain: raw_json[k].idFormChain,
                  fkObjGroup: raw_json[k].fkObjGroup,
                  grName: opt_list[k0].label,
                  list: "",
                  listPos: 0,
                  oglName: raw_json[k].name,
                  idDor: raw_json[k].idDor,
                  pos: raw_json[k].pos,
                  name: raw_json[k].name,
                  description: raw_json[k].description,
                  odf: raw_json[k].odf,
                  typeForm: raw_json[k].typeForm,
                  idAuthor: raw_json[k].idAuthor,
                  activeTip: raw_json[k].activeTip,
                  visibleTip: raw_json[k].visibleTip,
                  privilege: raw_json[k].privilege,
                  version: raw_json[k].version,
                  dateStart: raw_json[k].dateStart,
                  dateEnd: raw_json[k].dateEnd,
                  dateCreate: raw_json[k].dateCreate,
                  dateDelete: raw_json[k].dateDelete,
                  corTip: raw_json[k].corTip,
                  listFormMark: raw_json[k].listFormMark,
                  listNumericalPokValue: raw_json[k].listNumericalPokValue
                }); 
              }
            },
          (error: HttpErrorResponse) => {
          console.log (error.name + ' ' + error.message);
          });
        } //for
        return listForms || [];
      })
      .catch((res) => {
        console.error(res);
      });
  }
  
  /*
  getAllForms(isIncludedDel:boolean,dateReport:string): any {
    let typeTreeElements:string='form';
    let urlzap:string=`${environment.apiUrl}/objGroup/getAllCentralGroup?typeTreeElements=`+typeTreeElements+`&isIncludedDel=`+isIncludedDel+`&dateReport=`+dateReport;
    urlzap='assets/grf.json';
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
        let listForms:any=[];
        let grId:string;
        for (let k = 0; k < opt_list.length; k++) { 
          grId=opt_list[k].value;
          this.getAllDforms(listForms, grId, true, opt_list[k].label);
          //console.log(listForms);
        }
        return listForms || [];
      })
      .catch((res) => {
        console.error(res);
      });
  }

  getAllDforms(new_list:any, idObjGroup:string, isIncludedDel:boolean, groupName:string): void {
    let urlzap:string=`${environment.apiUrl}/form/getListByObjGroupId?idObjGroup=`+idObjGroup+`&isIncludedDel=`+isIncludedDel;
    urlzap='assets/forms.json'
    this.httpClient.get<Dforms[]>(urlzap, { headers: this.corsHeaders })
    .toPromise()
      .then((res) => {
        let raw_json:Dforms[] = res;
        for (let k = 0; k < raw_json.length; k++) {
          new_list.push({
            id: raw_json[k].id,
            idFormChain: raw_json[k].idFormChain,
            fkObjGroup: raw_json[k].fkObjGroup,
            grName: groupName,
            idDor: raw_json[k].idDor,
            pos: raw_json[k].pos,
            name: raw_json[k].name,
            description: raw_json[k].description,
            odf: raw_json[k].odf,
            typeForm: raw_json[k].typeForm,
            idAuthor: raw_json[k].idAuthor,
            activeTip: raw_json[k].activeTip,
            visibleTip: raw_json[k].visibleTip,
            privilege: raw_json[k].privilege,
            version: raw_json[k].version,
            dateStart: raw_json[k].dateStart,
            dateEnd: raw_json[k].dateEnd,
            dateCreate: raw_json[k].dateCreate,
            dateDelete: raw_json[k].dateDelete,
            corTip: raw_json[k].corTip,
            listFormMark: raw_json[k].listFormMark,
            listNumericalPokValue: raw_json[k].listNumericalPokValue
          }); 
        }
        //return new_list || [];
      })
      .catch((res) => {
        console.error(res);
      });
  }
*/
}