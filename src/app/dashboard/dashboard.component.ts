import { Component, OnInit, HostListener } from '@angular/core';
import {Router} from '@angular/router';
import { OciuiServiceService } from '../ociui-service.service';
import { JenkinsCrudService } from '../jenkins-crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public isDate = "";
  public isSuite: any = "";
  public suiteType: any = "";
  public today = new Date();
  public isFeedback = false;
  public myTextarea:string | undefined;
  public isJob: boolean = false;
  public jobList: any;

  constructor(private router:Router, public ociuiservice: OciuiServiceService, 
    public jenkinscrudeservice: JenkinsCrudService){
    } 

  ngOnInit() {
      let job = sessionStorage.getItem('jobName');
      this.getJobNameList();
      setInterval(() => this.refreshData(), 60000);

  }
  
  getJobNameList() {
    this.jenkinscrudeservice.getJobNameList()
    .subscribe(
      p => {
        this.jobList = p;
        console.log("job list are", this.jobList);
        this.updateJobList();
        this.formatJobNameList();
      },
      error => {
        console.log(error);
      });
      
  }

  updateJobList () {
    if(this.ociuiservice.suiteType == 'sanity') {
      this.jobList =this.jobList.sanity;
    } else if (this.ociuiservice.suiteType == 'feature') {
      this.jobList =this.jobList.feature;
    } else {
      this.jobList = '';
    }
  }

  onSuiteChange() {
    this.ociuiservice.reportStatus = false;
    this.isSuite = "";
    this.ociuiservice.isStats = false;
    this.ociuiservice.avg_time = ''

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
    this.isDate = $( "#myselectDates option:selected" ).text();
    this.isSuite = $('#myselectNames option:selected').val();
    let type = $('#suiteType').val();
    this.isSuite = type == 'all'? type : this.isSuite;
    this.ociuiservice.setDateRange(this.isDate);
    this.ociuiservice.setSuiteName(this.isSuite);
    this.ociuiservice.isStats = true;

  }

  selectSuiteType() {
    this.onSuiteChange();
    this.suiteType = $('#suiteType option:selected').val();
    let k = $("#suiteType option:selected" ).val();
    this.isJob = (k == 'none' || k == 'all')? false: true; 
    this.ociuiservice.setSuiteType(this.suiteType);
    this.isJob ? this.getJobNameList() : null;
  }

  formatJobNameList() {
    // going to formate job name list
    for(let i = 0; i<= this.jobList.length; i++) {
      let job = this.jobList[i] != "undefined" ? this.jobList[i].job_name : null;
      
      if(job && job.split(' ')[0] == "Sanity"){
        this.jobList[i].job_name = job.replace("Sanity", "");
      } else if(job && job.split(' ')[0] == "Feature") {
        this.jobList[i].job_name = job.replace("Feature", "").replace("ADW", "").replace("ATP", "");
      }
    }
  }

  onSubmit() {
    this.isDate = $( "#myselectDates option:selected" ).text();
    let type = $('#suiteType').val();
    this.isSuite = $('#myselectNames').val(); 
    this.isSuite = type == 'all'? type : this.isSuite;
    this.ociuiservice.setDateRange(this.isDate);
    this.ociuiservice.setSuiteName(this.isSuite);
    this.ociuiservice.reportStatus = true;

  }

  getFeedback() {
    $("#dashbordBody").prop('disabled',true);
  }
  
}

