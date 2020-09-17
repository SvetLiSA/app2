export interface ICust {
    id?: string;
    name?: string;
    surName?: string;
    secondName?: string;
    workPosition?: string;
    organizationName?: string;
}

export interface IGroups {
    id: string;
    fkObjGroup?: string;
    objType: string;
    name: string;
    pos: number;
    idDor: string;
    idAuthorCreate: string;
    authorCreate?: ICust;
    idAuthorDelete: string;
    authorDelete?: ICust;
    activeTip?: boolean;
    privilege?: boolean;
    dateCreate: string;
    dateDelete?: string;
    corTip: string;
    listChildrenObjGroup: IGroups[];
}

export class Dgroups implements IGroups {
    id: string;
    fkObjGroup?: string;
    objType: string;
    name: string;
    pos: number;
    idDor: string;
    idAuthorCreate: string;
    authorCreate?: ICust;
    idAuthorDelete: string;
    authorDelete?: ICust;
    activeTip?: boolean;
    privilege?: boolean;
    dateCreate: string;
    dateDelete?: string;
    corTip: string;
    listChildrenObjGroup: Dgroups[];

    constructor(values: Dgroups) {
        this.id = values.id;
        this.fkObjGroup = values.fkObjGroup;
        this.objType = values.objType;
        this.name = values.name;
        this.pos = values.pos;
        this.idDor = values.idDor;
        this.idAuthorCreate = values.idAuthorCreate;
        this.authorCreate = values.authorCreate;
        this.idAuthorDelete = values.idAuthorDelete;
        this.authorDelete = values.authorDelete;
        this.activeTip = values.activeTip;
        this.privilege = values.privilege;
        this.dateCreate = values.dateCreate;
        this.dateDelete = values.dateDelete;
        this.corTip = values.corTip;
        this.listChildrenObjGroup = values.listChildrenObjGroup;
    } 
}