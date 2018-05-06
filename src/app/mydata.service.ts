import { PageZone30 } from './zone30';
import { Repetitieruimte, PageRepetitieruimte } from './repetitieruimte';

import { Postkantoor, PagePostkantoor } from './postkantoren/postkantoor';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable(
)
export class MydataService {

  constructor(private http:HttpClient) { }
  PostkantoorUrl: string = 'http://datasets.antwerpen.be/v4/gis/postkantooroverzicht.json';
  RepetieruimtesUrl: string = 'http://datasets.antwerpen.be/v4/gis/repetitieruimteoverzicht.json';
  Zone30Url: string = 'http://datasets.antwerpen.be/v4/gis/zone30.json';
  



  getPostkantoren() : Observable<PagePostkantoor> {
    return this.http.get<PagePostkantoor>(this.PostkantoorUrl);
  }

  getRepetitieruimtes() : Observable<PageRepetitieruimte> {
    return this.http.get<PageRepetitieruimte>(this.RepetieruimtesUrl);
  }
  getZones() : Observable<PageZone30> {
    return this.http.get<PageZone30>(this.Zone30Url);
  }
}
