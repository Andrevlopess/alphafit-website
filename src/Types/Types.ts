export interface IFeature {
    id: number;
    title: string;
    icon: any;
    description:string;
}
export interface IModalidades {
    id: number;
    title: string;
    icon: any;
    description:string;
}

export interface IDepoiments {
    id: number;
    depoiment: string;
    authorImage: string;
    rate: number;
    authorName: string;
}
export interface IFaq {
    id: number;
    question:string;
    response:string
}

export interface IPlan {
    id: number;
    title: string;
    prevPrice: number;
    atualPrice: number;
    benefits: string[];
    details : string[]
}
export interface IFundador {
    id:number;
    name:string;
    profileImage:string;
    function: string;
}