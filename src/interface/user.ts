import { Igame } from "./game";

export interface Iuser{
    _id?: string;
    name: string;
    password: string;
    mygames:Igame[]
    points: number
    percent_souccess: number
}