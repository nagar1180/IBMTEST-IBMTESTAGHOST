import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { IDepartment } from 'src/model/department.model';
import { Identifiers } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  baseUrl="http://localhost:3000/";
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<IDepartment[]>(`${this.baseUrl}departments`)
  }
}
