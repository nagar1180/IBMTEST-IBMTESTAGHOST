import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { IDepartment } from 'src/model/department.model';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  baseUrl= environment.baseUrl;
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<IDepartment[]>(`${this.baseUrl}department`)
  }
  getById(id : Number){
    return this.http.get<IDepartment>(`${this.baseUrl}department/${id}`);
   }

   save(data : IDepartment){
     return this.http.post(`${this.baseUrl}department`, data);
   }

   update(id: Number, data: IDepartment){
     console.log(data);
    return this.http.post(`${this.baseUrl}department/${id}`, data);
   }

   delete(id: Number){
    return this.http.delete(`${this.baseUrl}department/${id}`);
   }
}
