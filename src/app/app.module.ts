import { AgmCoreModule } from '@agm/core';
import { PostkantorenComponent } from './postkantoren/postkantoren.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MydataService } from './mydata.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RepetitieruimteComponent } from './repetitieruimte/repetitieruimte.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { Zone30Component } from './zone30/zone30.component';

@NgModule({
  declarations: [
    AppComponent,
    PostkantorenComponent,
    RepetitieruimteComponent,
    GooglemapComponent,
    Zone30Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDLhHzsIjrmtbqq5EBUE7dQrQeJgAFDFEA'
    }),
    FormsModule,
    RouterModule.forRoot([
    {
    path: 'repetieruimte', component: RepetitieruimteComponent
    },
    {
    path: 'postkantoor', component: PostkantorenComponent
    },
    {
    path: 'googlemap', component: GooglemapComponent
    },
    {
      path: 'zone30', component: Zone30Component
      }
  ])
  ],
  providers: [MydataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
