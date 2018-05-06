import { Repetitieruimte } from './../repetitieruimte';
import { MydataService } from './../mydata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repetitieruimte',
  templateUrl: './repetitieruimte.component.html',
  styleUrls: ['./repetitieruimte.component.css']
})
export class RepetitieruimteComponent implements OnInit {


  

  public repetitieruimtes : Repetitieruimte[] = [];
  constructor(private dataService:MydataService) { }

  ngOnInit() {
    this.dataService.getRepetitieruimtes()
    .subscribe(result => this.repetitieruimtes = result.data
  ); 
  }
}