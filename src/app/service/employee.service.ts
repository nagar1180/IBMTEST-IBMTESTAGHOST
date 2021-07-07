import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from 'src/model/employee.model';
import {BaseUrl} from 'src/model/configuration.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 baseUrl = "https://ibmtestapi2021.azurewebsites.net/api/";
  constructor(private http: HttpClient, private route : ActivatedRoute) {

   }

   getAll(){
     return this.http.get<IEmployee[]>(this.baseUrl+"employee");
   }

   getById(){
    var id = 0;
    return this.http.get<IEmployee>(this.baseUrl+ `employee/${id}`);
   }

   saveEmployee(data : IEmployee){
     //console.warn(data);
     return this.http.post(`${this.baseUrl}employee`, data);
   }
}
