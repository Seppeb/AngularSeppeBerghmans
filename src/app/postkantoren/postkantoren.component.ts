import { AgmCoreModule, AgmMap } from '@agm/core';
import { Postkantoor } from './postkantoor';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MydataService } from '../mydata.service';
import { HttpClient } from '@angular/common/http';





@Component({
  selector: 'app-postkantoren',
  templateUrl: './postkantoren.component.html',
  styleUrls: ['./postkantoren.component.css']
})
export class PostkantorenComponent implements OnInit {


  public postkantoren: Postkantoor[] = [];

  constructor(private dataService: MydataService) { }

  ngOnInit() {
    this.dataService.getPostkantoren()
    .subscribe(result => this.postkantoren = result.data.map(postkan => {
      postkan.latitude = +postkan.point_lat;
      postkan.longitude = +postkan.point_lng;
      return postkan
    }));
  }
}
