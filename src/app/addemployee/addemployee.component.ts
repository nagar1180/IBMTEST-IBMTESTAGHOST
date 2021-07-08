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
      empName: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      deptId :new FormControl(0, [Validators.required, Validators.min(1), Validators.max(999)]),
    });
  }


  onSubmit(): void{
    //console.log(this.employeeForm.value);
     this.empService.saveEmployee(this.employeeForm.value).subscribe((result)=>{
      this.router.navigate(['/employee']);
     })
  }
  empName(){ return this.employeeForm.get('empName');}
  deptId(){ return this.employeeForm.get('deptId')}
}
