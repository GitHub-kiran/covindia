import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { CovidSeviceService } from '../covid-service.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-covid-stats',
  templateUrl: './covid-stats.component.html',
  styleUrls: ['./covid-stats.component.scss']
})
export class CovidStatsComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  chartProp: any = {};
  htmlString: any;
  http: HttpClient | undefined;

  constructor(public covidservice: CovidSeviceService, private sanitizer: DomSanitizer, http: HttpClient) {
    monkeyPatchChartJsTooltip();   
    monkeyPatchChartJsLegend();
  }

  public pieChartLabels: Label[] = [['difs'], ['sucs'], ['skips']];
  public pieChartData: SingleDataSet = [0, 0, 0];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public pieChartColors: Array < any > = [ {
    backgroundColor: [],
    borderWidth: 0.2
  }];

  ngOnInit() {
    this.chartProp.green = "#00af00";
    this.chartProp.red = "#DC143C";
    this.chartProp.yellow = "#FFFF00";
    this.loadStats();
    // this.someMethod();
    // if(this.covidservice.isBuild && !this.covidservice.isStats)   {
    //   // $("#build").load(this.covidservice.buildUrlHtml); 
    //   window.location.href = this.covidservice.buildUrlHtml;
    // }

  }

//   angular: any.module('MyModule' [])
//     .controller('MyController', function ($scope: { myfunction: (data: any) => void; }) {
//     $scope.myfunction = function (data) {
//         alert("---" + data);
//     };
// });

  // someMethod(){

  //   const headers = new HttpHeaders({
  //   'Content-Type':  'text/plain',
  // });
  // const request = this.http?.get<string>(this.covidservice.buildUrlHtml, {
  //   headers: headers,
  //   // responseType: 'text'
  // }).subscribe((res: any) => this.htmlString = res);
  
  //  console.log("kkkkkkkkkkkkkkkpppp", this.htmlData); 
  //  this.htmlData = this.sanitizer.bypassSecurityTrustHtml(this.htmlString); // this line bypasses angular security
  //  console.log("jjjjjjjjjjjjj", this.htmlData); 
  // }

  loadStats() {
    this.pieChartData[0] = this.covidservice.gDif;
    this.pieChartData[1] = this.covidservice.gSuc;
    this.pieChartData[2] = this.covidservice.gSkip;
    this.pieChartColors[0].backgroundColor.push(this.chartProp?.red);
    this.pieChartColors[0].backgroundColor.push(this.chartProp?.green);
    this.pieChartColors[0].backgroundColor.push(this.chartProp?.yellow);

  }
  
}
