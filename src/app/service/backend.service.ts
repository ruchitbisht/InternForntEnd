import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private baseUrl : string = "http://localhost:8080";

  constructor(private http : HttpClient) { }

  sendData(data:any){
   return this.http.post(`${this.baseUrl}/intern`,data)
  }
  getData(){
    return this.http.get(`${this.baseUrl}/intern`)
  }
}
