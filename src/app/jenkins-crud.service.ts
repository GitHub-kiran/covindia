import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OciuiServiceService } from './ociui-service.service';

// const baseURL = 'https://heroku-flask-app-16.herokuapp.com/';
const baseURL = 'http://127.0.0.1:5000/';

@Injectable({
  providedIn: 'root'
})
export class JenkinsCrudService {
  constructor(private httpClient: HttpClient, public ociuiservice: OciuiServiceService) { }

  getJobNameList(): Observable<any> {
    let path = baseURL + this.ociuiservice.suiteType + '/';
    return this.httpClient.get(path);
  }

  getParticularJobDetails(): Observable<any> {
    let path = baseURL + this.ociuiservice.suiteName + '/';
    return this.httpClient.get(path);
  }

  getAllJenkinsJobDetails(): Observable<any> {
    let path = baseURL + 'get_all/';
    console.log("under all......", path);
    return this.httpClient.get(path);
  }

}