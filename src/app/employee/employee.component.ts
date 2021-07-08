import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from 'src/model/employee.model';
import { EmployeeService } from '../service/employee.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service : EmployeeService) { }
  employees$ = new Observable<IEmployee[]>();

  ngOnInit(): void {
    this.employees$ =  this.service.getAll();
    // this.service.getAll().subscribe((data)=>{
    //   console.log(data);
    // })
  }

  onDelete(id: Number){
    this.service.delete(id).subscribe((data)=>{
      this.employees$ =  this.service.getAll();
    });
  }
}
