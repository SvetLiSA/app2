export interface IlistDokladLinkForm {
    fkDokladOgl: string;
    id: string;
    idFormChain: string;
    rangeForInsert?: string;
    reportHour?: number;
    startPos?: number
}

export interface IlistDokladOgl {
    fkDoklad: string;
    id: string;
    listDokladLinkForm: IlistDokladLinkForm[];
    listName: string;
    listPos: number;
    oglName: string
}

export interface IDoklads {
    activeTip?: boolean;
    corTip: string;
    customer: string;
    dateCreate?: string;
    dateDelete?: string;
    dateEnd: Date;
    dateStart: Date;
    fkObjGroup: string;
    fullName: string;
    groupPos: number;	
    id?: string;	
    idAuthor?: string;
    idDokladChain?: string;
    idDor: string;	
    listDokladOgl: IlistDokladOgl[];
    privilege: string;
    shortName: string;
    version: string;
    visibleTip?: boolean
}

export class Doklads implements IDoklads {
    activeTip?: boolean;
    corTip: string;
    customer: string;
    dateCreate?: string;
    dateDelete?: string;
    dateEnd: Date;
    dateStart: Date;
    fkObjGroup: string;
    fullName: string;
    groupPos: number;	
    id?: string;	
    idAuthor?: string;
    idDokladChain?: string;
    idDor: string;	
    listDokladOgl: IlistDokladOgl[];
    privilege: string;
    shortName: string;
    version: string;
    visibleTip?: boolean

    constructor(values: IDoklads) {
        this.activeTip = values.activeTip;
        this.corTip = values.corTip;
        this.customer = values.customer;
        this.dateCreate = values.dateCreate;
        this.dateDelete = values.dateDelete;
        this.dateStart = values.dateStart;
        this.dateEnd = values.dateEnd;
        this.fkObjGroup = values.fkObjGroup;
        this.fullName = values.fullName;
        this.groupPos = values.groupPos;
        this.id = values.id;
        this.idAuthor = values.idAuthor;
        this.idDokladChain = values.idDokladChain;
        this.idDor = values.idDor;
        this.listDokladOgl = values.listDokladOgl;
        this.privilege = values.privilege;
        this.shortName = values.shortName;
        this.version = values.version;
        this.visibleTip = values.visibleTip;
    }
}