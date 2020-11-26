export enum AnswersTypes {
  setAnswersData = '@setAnswersData',
}

export interface AnswersState {
  AnswersData: {name:string, time:number, center:boolean};
}
