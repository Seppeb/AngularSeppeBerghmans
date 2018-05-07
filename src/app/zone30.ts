import { LatLng } from '@agm/core';

export class PageZone30 {
    data: Zone30[];
 }

 export class Zone30 {
     id: string;
     objectid: string;
     geometry: string;
     postcode: string;
     district: string;
     paths: any[];

 }
export class Longlat implements LatLng  {

  _lat = 0;
  _lng = 0;
  'constructor'(lat: number, lng: number): void {}
  lat() {
    return 0;
  }
  lng() {
    return 0;
  }
}

 export class Geometry {
    coordinates: any[][][];
 }
