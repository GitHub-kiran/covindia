import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovidSeviceService {
  selectedRegion!: string;
  countryName!: string;
  gDif:number | undefined;
  gSuc:number | undefined;
  gSkip:number | undefined;
  reportStatus!: boolean;
  isStats!: boolean;
  avg_time: string = ''; 
  singleJobReport: boolean = false;
  buildUrlHtml:string = '';
  isBuild:boolean = false;
  allRegionalCountry : any = '';
  regionalCountry : any = '';
  population : String = '';
  
  constructor() { }

  public setRegion(region: string) {
    this.selectedRegion = region;
  }

  public setCountryName(country: string) {
    this.countryName = country;
  }

  public setPopulation(population: any) {
    this.population = population;
  }

  public setTestStates(dif: number, suc:number, skip:number) {
    this.gDif = dif;
    this.gSuc = suc;
    this.gSkip = skip;    
  }
  public setSingleJobReport(jobData:any) {
    this.singleJobReport = true;
    sessionStorage.setItem('jobName', jobData);

  }

  public setAllRegionalCountries(data: Object) {
    this.allRegionalCountry = data;
  }

  public setRegionalCountry(data: Object) {
    this.regionalCountry = data;
  }
}
