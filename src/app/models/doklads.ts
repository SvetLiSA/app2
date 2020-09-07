export interface IDoklads {
    id?: string;
    idDokladChain?: string;
    fkObjGroup: string;
    idDor: string;
    groupPos: number;
    shortName: string;
    fullName: string;
    customer: string;
    idAuthor?: string;
    activeTip?: boolean;
    visibleTip?: boolean;
    privilege: string;
    version: string;
    dateStart: string;
    dateEnd: string;
    dateCreate?: string;
    dateDelete?: string;
    corTip?: string;
    listDokladOgl?: any;
}

export class Doklads implements IDoklads {
    id?: string;
    idDokladChain?: string;
    fkObjGroup: string;
    idDor: string;
    groupPos: number;
    shortName: string;
    fullName: string;
    customer: string;
    idAuthor?: string;
    activeTip?: boolean;
    visibleTip?: boolean;
    privilege: string;
    version: string;
    dateStart: string;
    dateEnd: string;
    dateCreate?: string;
    dateDelete?: string;
    corTip?: string;
    listDokladOgl?: any;

    constructor(values: IDoklads) {
        this.id = values.id;
        this.idDokladChain = values.idDokladChain;
        this.fkObjGroup = values.fkObjGroup;
        this.idDor = values.idDor;
        this.groupPos = values.groupPos;
        this.shortName = values.shortName;
        this.fullName = values.fullName;
        this.customer = values.customer;
        this.idAuthor = values.idAuthor;
        this.activeTip = values.activeTip;
        this.visibleTip = values.visibleTip;
        this.privilege = values.privilege;
        this.version = values.version;
        this.dateStart = values.dateStart;
        this.dateEnd = values.dateEnd;
        this.dateCreate = values.dateCreate;
        this.dateDelete = values.dateDelete;
        this.corTip = values.corTip;
        this.listDokladOgl = values.listDokladOgl;
    }
}