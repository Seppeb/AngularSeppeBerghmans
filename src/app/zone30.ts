import { LatLng } from "@agm/core";

export class PageZone30 {
    data: Zone30[];
 }
 
 export class Zone30 {
     id: string;
     objectid: string;
     geometry:string;
     postcode:string;
     district:string;
     paths: any[];

 }
export class Longlat implements LatLng{
  
    private _lat: number;
  private _lng: number;
  lat() {
    return this._lat;
  }
  lng() {
    return this._lng;
  }
  // here's the important part
  "constructor"(lat: number, lng: number) { 
    this._lat = lat;
    this._lng = lng;
  }
}

 export class Geometry{
    coordinates: any[][][];
 }
 