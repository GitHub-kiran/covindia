import { Component, OnInit, HostListener } from '@angular/core';
import {Router} from '@angular/router';
import { CovidSeviceService } from '../covid-service.service';
import { CovinCrudService } from '../covin-crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public regionName = "";
  public regionList:string[] = [];
  public countryName: any = "";
  public country: any = "";
  public today = new Date();
  public isFeedback = false;
  public Allcountries: any;

  constructor(private router:Router, public covidservice: CovidSeviceService, 
    public covincrudservice: CovinCrudService){
    } 

  ngOnInit() {
      this.getCountryNameList();
      setInterval(() => this.refreshData(), 60000);

  }

  getCountryNameList() {
    this.covincrudservice.getCountryList()
    .subscribe(
      p => {
        let d = p;
        this.covidservice.setAllRegionalCountries(d.data);
        this.getRegionalData();
      },
      error => {
        console.log(error);
      });
      
  }

  getRegionalData() {
    console.log(this.covidservice.allRegionalCountry);
    this.getRegionList();
  }

  getRegionalCountries() {
    if(this.regionName && this.regionName != 'All') {
      console.log("region is allllllll");
    }
  }

  getRegionList() {
    let region = this.covidservice.allRegionalCountry;
    this.regionList = Object.keys(region);
  }

  onSuiteChange() {
    this.covidservice.reportStatus = false;
    this.countryName = "";
    this.covidservice.isStats = false;
    this.covidservice.avg_time = ''

  }

  onUpdateRegion() {
    let reg = $( "#myselectRegions option:selected" ).text();
    if(reg && reg != 'All') {
      var obj = this.covidservice.allRegionalCountry;
      this.covidservice.setRegionalCountry(this.covidservice.allRegionalCountry[reg]);
    }
  }

  @HostListener('window:click', ['$event.target'])
  onClick(targetElement: string) {
    targetElement = 'button';
  }
  
  refreshData() {
    this.today = new Date();

  }

  commentOn() {
    this.isFeedback = !this.isFeedback;
    var person = prompt("Provide Your Feedback", "");
    if (person != null) {
      console.log("prompt message is : ", person);
    }
  }

  openDialog(): void {
    // TODO
  }

  setJobSelector(jobName:any) {
    
  }
 
  showStats() {
    this.regionName = $( "#myselectRegions option:selected" ).text();
    this.countryName = $('#country').val();
    this.covidservice.setRegion(this.regionName);
    // this.covidservice.setCountryName(this.countryName);
    this.covidservice.isStats = true;
  }

  selectCountry() {
    this.onSuiteChange();
    // this.countryName = $('#country option:selected').text();
    // console.log('my country name is: ', this.countryName);
    // let population = $('#country').val();
    // console.log('population is :', population);
    // this.covidservice.setCountryName(this.countryName);
    // this.covidservice.setPopulation(population);
    
  }

  onSubmit() { 
    this.regionName = $( "#myselectRegions option:selected" ).text();
    this.countryName = $('#country option:selected').text();
    this.covidservice.setRegion(this.regionName);
    this.covidservice.setCountryName(this.countryName);
    let population = $('#country').val();
    console.log('population is :', population);
    this.covidservice.setCountryName(this.countryName);
    this.covidservice.setPopulation(population);
    
    this.covidservice.reportStatus = true;

  }

  getFeedback() {
    $("#dashbordBody").prop('disabled',true);
  }
  
}

