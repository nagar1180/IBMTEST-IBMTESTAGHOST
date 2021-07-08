import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from 'src/model/employee.model';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
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

   update(id: Number, data: IEmployee){
     console.log(data);
    return this.http.post(`${this.baseUrl}employee/${id}`, data);
   }

   delete(id: Number){
     console.log(this.baseUrl);
     console.log(id);
    return this.http.delete(`${this.baseUrl}employee/${id}`);
   }
}
