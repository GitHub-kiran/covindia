import { Component, OnInit } from '@angular/core';
import { OciuiServiceService } from '../ociui-service.service';
import { JenkinsCrudService } from '../jenkins-crud.service';

@Component({
  selector: 'app-ociui-reports',
  templateUrl: './ociui-reports.component.html',
  styleUrls: ['./ociui-reports.component.scss']
})
export class OciuiReportsComponent implements OnInit {

  suiteName: string | undefined;
  dateRange: string | undefined;
  isSingleSuite = false;
  report: any;
  testCount:string | undefined;
  SingleJob: any;
  AllSingleJob: any;
  
  constructor(public ociuiservice: OciuiServiceService, public jenkinscrudeservice: JenkinsCrudService){}
  
  ngOnInit() {
    this.suiteName = this.ociuiservice.suiteName;
    this.dateRange = this.ociuiservice.selectedDateRange;
    if(this.suiteName != "all") {
      this.readSingleJobDetails();
      this.isSingleSuite = true;
    } else {
        // debugger;
        this.readAllJobDetails();        
        this.isSingleSuite = false;   
    }

  }

  updateAllData() {
    this.report = this.AllSingleJob['all_job_data'];
    
  }

  switchToJob(jobName: any) {
    this.ociuiservice.setSingleJobReport(jobName);
    
  }

  readSingleJobDetails() {
    this.jenkinscrudeservice.getParticularJobDetails()
    .subscribe(
      p => {
        this.SingleJob = p;
        console.log(this.SingleJob);
        this.updateTestStates(this.SingleJob);
      },
      error => {
        console.log(error);
      });
      
  }

  readAllJobDetails() {
    this.jenkinscrudeservice.getAllJenkinsJobDetails()
    .subscribe(
      p => {
        this.AllSingleJob = p;
        console.log("all suite list data", this.AllSingleJob['all_job_data']);
        this.updateTestStates(this.AllSingleJob['all_job_data']);
        this.updateAllData();
      },
      error => {
        console.log(error);
      });
   
  }

  updateTestStates(jobList:any) {
    let difCount: number = 0;
    let sucCount: number = 0;
    let skipCount: number = 0;
    let totalTime = [];
    for(let i=0; i< Object.keys(jobList).length; i++) {
      difCount = difCount + jobList[i].dif;
      sucCount = sucCount + jobList[i].suc;
      skipCount = skipCount + jobList[i].skip;
      totalTime.push(jobList[i].avg_time);
    }
    this.ociuiservice.setTestStates(difCount, sucCount, skipCount);
    let maxTime = Math.max(...totalTime)
    
    var hours = Math.floor(maxTime);  
    var minutes = Math.ceil(((maxTime - Math.floor(maxTime)) * 60));
    this.ociuiservice.avg_time = hours ? hours + ' hour ' + minutes + ' minutes' : minutes + ' minutes' ;
  }


  showBuildUrlPage(url:string) {
    this.ociuiservice.isStats = false;
    this.ociuiservice.isBuild = true;
    this.ociuiservice.buildUrlHtml = url;

  }

}