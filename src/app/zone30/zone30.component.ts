import { MydataService } from './../mydata.service';
import { Component, OnInit } from '@angular/core';
import { Zone30, Longlat } from '../zone30';
import { LatLng } from '@agm/core';

@Component({
  selector: 'app-zone30',
  templateUrl: './zone30.component.html',
  styleUrls: ['./zone30.component.css']
})
export class Zone30Component implements OnInit {

  constructor(private mydataService: MydataService) { }

  listZone30: Zone30[] = [];

  ngOnInit() {
    this.mydataService.getZones().subscribe(result => {
      this.listZone30 = result.data.map(zone30 => {
        zone30.paths = JSON.parse(zone30.geometry).coordinates[0].map(longlat => {
          return Longlat.apply(longlat[0], longlat[1]);
        });
        return zone30;
      });
    });
  }

}
