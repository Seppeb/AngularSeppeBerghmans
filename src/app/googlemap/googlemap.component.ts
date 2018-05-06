import { Showable } from './showable';
import { Postkantoor } from './../postkantoren/postkantoor';
import { Repetitieruimte } from './../repetitieruimte';
import { MydataService } from './../mydata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-googlemap',
 templateUrl: './googlemap.component.html',

  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {


  public postkantoren: Postkantoor[] = [];
  public repetitieruimtes : Repetitieruimte[] = [];
  public markers : Showable[] = [];
  

  public selectedpostkantoor : Postkantoor;
  public selectedrepetitieruimte : Repetitieruimte;
  
  constructor(private dataService:MydataService) { }

  toonPostkantoren(){
    this.markers = this.postkantoren;
  }

  verberg(){
    this.markers = [];
  }

  singlePostkantoor() {
    this.markers = [this.selectedpostkantoor];
  }
  toonRepetitieruimtes(){
  this.markers = this.repetitieruimtes;
}
singleRepetitieruimte() {
  this.markers = [this.selectedrepetitieruimte];
}
  ngOnInit() {
    this.dataService.getRepetitieruimtes()
    .subscribe(result => this.repetitieruimtes = result.data.map(repetitiekan =>{
      repetitiekan.latitude = +repetitiekan.point_lat;
      repetitiekan.longitude = +repetitiekan.point_lng;
      return repetitiekan
    }))

    this.dataService.getPostkantoren()
    .subscribe(result => this.postkantoren = result.data.map(postkan => {
      postkan.latitude = +postkan.point_lat;
      postkan.longitude = +postkan.point_lng;
      return postkan
    }));
    
  }

}
