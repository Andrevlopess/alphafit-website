export interface IFeature {
    title: string;
    icon: any;
    description:string;
}
export interface IModalidades {
    title: string;
    icon: any;
    description:string;
}

export interface IDepoiments {
    depoiment: string;
    authorImage: string;
    rate: number;
    authorName: string;
}
export interface IFaq {
    question:string;
    response:string
}

export interface IPlan {
    title: string;
    prevPrice: number;
    atualPrice: number;
    benefits: string[];
    details : string[]
}