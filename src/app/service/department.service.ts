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
    return this.http.get<IDepartment[]>(`${this.baseUrl}departments`)
  }
}
