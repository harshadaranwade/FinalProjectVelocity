import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http:HttpClient) { }

  baseUrl:string = 'http://localhost:3000';
  httpHeaders:HttpHeaders = new HttpHeaders().set("Content-Type","application/json");

  getDataFromServer(endPoint:string){
    const url = this.baseUrl + endPoint;
    return this.http.get(url,{headers:this.httpHeaders});
  }
}
