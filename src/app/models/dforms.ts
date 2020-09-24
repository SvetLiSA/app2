export interface Dforms {
    id: string;
    idFormChain: string;
    fkObjGroup: string;
    idDor: string;
    pos: number;
    name: string;
    description: string;
    odf: string;
    typeForm: string;
    idAuthor: string;
    activeTip: boolean;
    visibleTip?: boolean;
    privilege?: string;
    version: string;
    dateStart: string;
    dateEnd: string;
    dateCreate: string;
    dateDelete: string;
    corTip: string;
    listFormMark: any[],
    listNumericalPokValue: any[]

}