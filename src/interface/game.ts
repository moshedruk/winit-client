import { Igambling } from "./Gambling";
import { Iplayer } from "./Player";

export interface Igame{
    id: string;
    name: string;
    playerA: Iplayer;
    playerB: Iplayer;
    date: string;
    winner: string
    is_finished: boolean;
    Gambling:Igambling[]
    result:string
}