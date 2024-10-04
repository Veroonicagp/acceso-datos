import { Model } from "./model";

//interfaz que tiene los metodos propios de una persona
export interface Person extends Model{
    name:string;
    surname:string;
    age:number;
}