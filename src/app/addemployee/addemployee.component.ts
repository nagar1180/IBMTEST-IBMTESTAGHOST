import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IDepartment } from 'src/model/department.model';
import { DepartmentService } from '../service/department.service';
import { EmployeeService } from '../service/employee.service';


@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  employeeForm!: FormGroup;
  department$ = new Observable<IDepartment[]>();
  constructor(
    private fb: FormBuilder,
    private deptService : DepartmentService,
    private empService : EmployeeService,
    private router : Router) {
   }

  ngOnInit(): void {
    this.department$ = this.deptService.getAll();
    this.initializeForm()
  }
  initializeForm() :void {
    this.employeeForm = this.fb.group({
      name: new FormControl('',Validators.required),
      deptId :new FormControl(1,Validators.required),
    });
  }


  onSubmit(): void{
     this.empService.saveEmployee(this.employeeForm.value).subscribe((result)=>{
       console.log(result);
     })
     this.router.navigate(['/employee']);
  }
  name(){ return this.employeeForm.get('name');}
  dept(){ return this.employeeForm.get('deptId')}
}
