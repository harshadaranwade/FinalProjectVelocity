import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { end } from '@popperjs/core';

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

  saveDataToServer(endPoint:string,body:any){
    const url = this.baseUrl + endPoint;
    return this.http.post(url,body,{headers:this.httpHeaders});
  }

  // editData(endPoint:string,id:any){
  //   const url = this.baseUrl + endPoint;
  //   let queryParam = new HttpParams().set('user_id',id)
  //   return this.http.get(url,{params:queryParam})
  // }
  // updateDataToServer(endPoint:string,body:any){
  //   const url = this.baseUrl + endPoint;
  //   return this.http.put(url,body,{headers:this.httpHeaders});
  // }
}
