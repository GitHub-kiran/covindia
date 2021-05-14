import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { OciuiServiceService } from '../ociui-service.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-ociui-stats',
  templateUrl: './ociui-stats.component.html',
  styleUrls: ['./ociui-stats.component.scss']
})
export class OciuiStatsComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  chartProp: any = {};
  htmlString: any;
  http: HttpClient | undefined;

  constructor(public ociuiservice: OciuiServiceService, private sanitizer: DomSanitizer, http: HttpClient) {
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
    // if(this.ociuiservice.isBuild && !this.ociuiservice.isStats)   {
    //   // $("#build").load(this.ociuiservice.buildUrlHtml); 
    //   window.location.href = this.ociuiservice.buildUrlHtml;
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
  // const request = this.http?.get<string>(this.ociuiservice.buildUrlHtml, {
  //   headers: headers,
  //   // responseType: 'text'
  // }).subscribe((res: any) => this.htmlString = res);
  
  //  console.log("kkkkkkkkkkkkkkkpppp", this.htmlData); 
  //  this.htmlData = this.sanitizer.bypassSecurityTrustHtml(this.htmlString); // this line bypasses angular security
  //  console.log("jjjjjjjjjjjjj", this.htmlData); 
  // }

  loadStats() {
    this.pieChartData[0] = this.ociuiservice.gDif;
    this.pieChartData[1] = this.ociuiservice.gSuc;
    this.pieChartData[2] = this.ociuiservice.gSkip;
    this.pieChartColors[0].backgroundColor.push(this.chartProp?.red);
    this.pieChartColors[0].backgroundColor.push(this.chartProp?.green);
    this.pieChartColors[0].backgroundColor.push(this.chartProp?.yellow);

  }
  
}
