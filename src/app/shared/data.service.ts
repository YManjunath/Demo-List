import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { mockData } from '../mock-data'

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private mockData = new BehaviorSubject<any>(mockData)

  constructor(private http:HttpClient) { }

  getData(): Observable<any>{
    return this.mockData.asObservable();
  }
}
