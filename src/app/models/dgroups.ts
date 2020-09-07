import { ValueTransformer } from '@angular/compiler/src/util';

export interface IGroups {
    id: string;
    fkObjGroup?: string;
    objType: string;
    name: string;
    pos: number;
    idDor: string;
    idAuthorCreate: string;
    idAuthorDelete: string;
    activeTip?: boolean;
    privilege?: boolean;
    dateCreate: string;
    dateDelete?: string;
    corTip: string;
    listChildrenObjGroup: Dgroups[];
}

export class Dgroups implements IGroups {
    id: string;
    fkObjGroup?: string;
    objType: string;
    name: string;
    pos: number;
    idDor: string;
    idAuthorCreate: string;
    idAuthorDelete: string;
    activeTip?: boolean;
    privilege?: boolean;
    dateCreate: string;
    dateDelete?: string;
    corTip: string;
    listChildrenObjGroup: Dgroups[];

    constructor(values: IGroups) {
        this.id = values.id;
        this.fkObjGroup = values.fkObjGroup;
        this.objType = values.objType;
        this.name = values.name;
        this.pos = values.pos;
        this.idDor = values.idDor;
        this.idAuthorCreate = values.idAuthorCreate;
        this.idAuthorDelete = values.idAuthorDelete;
        this.activeTip = values.activeTip;
        this.privilege = values.privilege;
        this.dateCreate = values.dateCreate;
        this.dateDelete = values.dateDelete;
        this.corTip = values.corTip;
        this.listChildrenObjGroup = values.listChildrenObjGroup !== undefined ? values.listChildrenObjGroup : undefined;
    }    
}
/*
function toGroupsList(values: IGroups[]): Dgroups[]{
    return values.map(treeNode => Dgroups(listChildrenObjGroup));
} 
*/