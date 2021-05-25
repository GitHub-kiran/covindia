import { Component, OnInit } from '@angular/core';
import { CovidSeviceService } from '../covid-service.service';
import { CovinCrudService } from '../covin-crud.service';
@Component({
  selector: 'app-covid-reports',
  templateUrl: './covid-reports.component.html',
  styleUrls: ['./covid-reports.component.scss']
})
export class CovidReportsComponent implements OnInit {

  region: string | undefined;
  singleCountry: any;
  report: any;
  AllRegionData: any;
  
  constructor(public covidservice: CovidSeviceService, public covincrudservice: CovinCrudService){}
  
  ngOnInit() {
    this.region = this.covidservice.selectedRegion;
    if(this.region != "All") {
      this.readSingleCountryDetails();
      // this.SingleCountry = true;
    } else {
        this.getAllRegionResult();        
        // this.isSingleCountry = false;   
    }

  }

  updateAllData() {
    this.report = this.AllRegionData.data;    
  }

  switchToJob(jobName: any) {
    this.covidservice.setSingleJobReport(jobName);
    
  }

  readSingleCountryDetails() {
    this.covincrudservice.getCountryData()
    .subscribe(
      p => {
        this.singleCountry = p;
        this.singleCountry = [this.singleCountry.data];
        console.log("single country is", this.singleCountry);
      },
      error => {
        console.log(error);
      });
      
  }

  getAllRegionResult() {
    this.covincrudservice.getAllRegionData()
    .subscribe(
      p => {
        this.AllRegionData = p;
        this.updateAllData();
      },
      error => {
        console.log(error);
      });
   
  }

}