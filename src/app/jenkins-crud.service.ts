import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CovidSeviceService } from './covid-service.service';

// const baseURL = 'https://heroku-flask-app-16.herokuapp.com/';
const baseURL = 'http://127.0.0.1:5000/';

@Injectable({
  providedIn: 'root'
})
export class JenkinsCrudService {
  constructor(private httpClient: HttpClient, public covidservice: CovidSeviceService) { }

  getJobNameList(): Observable<any> {
    let path = baseURL + '/cov/';
    return this.httpClient.get(path);
  }

  getParticularJobDetails(): Observable<any> {
    let path = baseURL + '/';
    return this.httpClient.get(path);
  }

  getAllJenkinsJobDetails(): Observable<any> {
    let path = baseURL + 'get_all/';
    console.log("under all......", path);
    return this.httpClient.get(path);
  }

}