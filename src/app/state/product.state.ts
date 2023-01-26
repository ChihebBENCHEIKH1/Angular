export enum DataState{
  LOADING,
  LOADED,
  ERROR
}
export interface AppData<T>{
  state?:DataState,
  data?:T,
  eroorMessage?:string //?==yajem y7otoul utilisateur yajem lee
}
