export class Quote {
  constructor(public id:number,public publisher:string,public author:string,public quote:string,
    public likes:number,public dislikes:number,public time:number,public highest:boolean){
  }
}
