import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CovidReportsComponent } from './covid-reports/covid-reports.component';
import { CovidStatsComponent } from './covid-stats/covid-stats.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CovidBuildDirective } from './covid-build.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CovidReportsComponent,
    CovidStatsComponent,
    CovidBuildDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    HttpClientModule,
    ChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
