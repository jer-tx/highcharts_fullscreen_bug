import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HighchartsChartModule} from "highcharts-angular";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule.withServerTransition({appId: 'serverApp'}),
        HighchartsChartModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
