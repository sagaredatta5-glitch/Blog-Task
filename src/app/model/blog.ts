

export interface Iblog{
    title:string;
    body:string;
    id:string;
    userId:number
}

export interface Ires{
    [key :string]:Iblog
}