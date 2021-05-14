import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OciuiServiceService {
  selectedDateRange!: string;
  suiteName!: string;
  suiteType = "sanity";
  gDif:number | undefined;
  gSuc:number | undefined;
  gSkip:number | undefined;
  reportStatus!: boolean;
  isStats!: boolean;
  avg_time: string = ''; 
  singleJobReport: boolean = false;
  buildUrlHtml:string = '';
  isBuild:boolean = false;
  
  constructor() { }

  public setDateRange(dateRange: string) {
    this.selectedDateRange = dateRange;
  }

  public setSuiteName(suiteName: string) {
    this.suiteName = suiteName;
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

  public setSuiteType(suiteType:any) {
    this.suiteType = suiteType;

  }
}
