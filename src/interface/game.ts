import { IBet} from "./Gambling";
import {ITeam } from "./team";

export interface Igame{
    _id?:string
    teamA:ITeam
    teamB:ITeam
    dateOfGame:Date
    ended:boolean
    scoreA:number
    scoreB:number
    bets:IBet[]
    gamblers?:string[]
}