export type navArrType={
    id?:number
    title?:string
    path?:string
    subMenu?:subMenuType[]
  }
  export type subMenuType={
    id:number
    title:string
    path:string
  }
  export type HomeBreadcrumbArr={
    id?:number
    title1?:string
    title2?:string
    content?:string
    buttonText?:string
  }
  // types.ts
export type Feature = {
  title: string;
  description: string;
  
};

export type FeaturesData = {
  [key: string]: Feature[]; // Allows for dynamic indexing by language
};
