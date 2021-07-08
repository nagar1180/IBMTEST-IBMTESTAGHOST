import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartmentService } from 'src/app/service/department.service';
import { IDepartment } from 'src/model/department.model';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments$= new Observable<IDepartment[]>();
  constructor(private deptservice:DepartmentService) { }

  ngOnInit(): void {

    this.departments$ = this.deptservice.getAll();
  }

  onDelete(id : Number){
    this.deptservice.delete(id).subscribe((data)=>{
      this.departments$ =  this.deptservice.getAll();
    });
  }
}
