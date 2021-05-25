import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CovidSeviceService } from './covid-service.service';

const baseURL = 'http://127.0.0.1:5000/';

@Injectable({
  providedIn: 'root'
})
export class CovinCrudService {

  constructor(private httpClient: HttpClient, public covidservice: CovidSeviceService) { }

  getCountryList(): Observable<any> {
    let path = baseURL + 'countries/';
    return this.httpClient.get(path);
  }

  getAllRegionData(): Observable<any> {
    let path = baseURL + 'bulkData/';
    return this.httpClient.get(path);
  } 

  getCountryData(): Observable<any> {
    console.log('under service....', this.covidservice.countryName);
    let path = baseURL + '/' + this.covidservice.countryName + '/';
    return this.httpClient.get(path);
  } 

}
