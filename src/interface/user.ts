import { Igame } from "./game";

export interface Iuser {
    username:string
    password:string
    points:number
    percent_souccess:number
    history?:string[] 
}