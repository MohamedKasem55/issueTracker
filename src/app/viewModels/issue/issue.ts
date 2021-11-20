export interface Issue {
    title:string,
    description:string,
    user?:string,
    date?:Date,
    attachment?:any,
    comments?:Array<string>,
}
