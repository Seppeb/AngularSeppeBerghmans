import { Showable } from "../googlemap/showable";

export class Postkantoor implements Showable {
    id: string;
    point_lat: string;
    point_lng: string;
    thema: string;
    type: string;
    subtype: string;
    naam: string;
    straat: string;
    huisnummer: string;
    postcode: string;
    district: string;
    lgst_niv: string;
    hgst_niv: string;
    grondopp: string;
    gebo: string;
    pero: string;
    begindatum: string;
    shape?: any;
    objectid: string;

    longitude:number;
    latitude:number;

    /**
     *
     */
    constructor(json:any) {
    Object.assign(this,json)
    }
}


export interface PagePostkantoor{
    data: Postkantoor[];
}