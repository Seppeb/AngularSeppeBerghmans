import { Showable } from './googlemap/showable';
export interface PageRepetitieruimte {
   data: Repetitieruimte[];
}

export interface Repetitieruimte extends Showable{
    id: string;
    objectid: string;
    point_lat: string;
    point_lng: string;
    shape?: any;
    code_object: string;
    roepnaam_zz_object: string;
    naam_zaal: string;
    hoofdfunctie_activiteitstype: string;
    max_zittend: string;
    max_staand: string;
    orig_fid: string;
    latitude:number;
    longitude:number;
}

