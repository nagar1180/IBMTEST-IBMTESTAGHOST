import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from 'src/model/employee.model';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 baseUrl = environment.baseUrl;
  constructor(private http: HttpClient, private route : ActivatedRoute) {

   }

   getAll(){
     return this.http.get<IEmployee[]>(this.baseUrl+"employee");
   }

   getById(id : Number){
    return this.http.get<IEmployee>(this.baseUrl+ `employee/${id}`);
   }

   saveEmployee(data : IEmployee){
     return this.http.post(`${this.baseUrl}employee`, data);
   }

   update(data: IEmployee){
    return this.http.post(`${this.baseUrl}employee/${data.empId}`, data);
   }

   delete(id: Number){

   }
}
