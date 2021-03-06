import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IEmployee } from 'src/model/employee.model';
import { IDepartment } from 'src/model/department.model';
import { DepartmentService } from '../service/department.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})

export class EditemployeeComponent implements OnInit {

  department$ = new Observable<IDepartment[]>();
   employeeForm = new FormGroup({
    empName: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    deptId: new FormControl('0',Validators.required),
  });
  constructor(private route: ActivatedRoute,
    private router: Router,
    private empservice : EmployeeService,
    private deptdervice: DepartmentService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.department$ = this.deptdervice.getAll();
    const id = +this.route.snapshot.paramMap.get('id')!;
     this.empservice.getById(id).subscribe((data)=>{
      this.initializeForm(data);
     });
  }

  initializeForm(employee: IEmployee) :void {
    this.employeeForm.setValue({
      empName: employee.empName,
      deptId: employee.deptId
    });
  }

  onSubmit(){
      const id = +this.route.snapshot.paramMap.get('id')!;
      this.empservice.update(id, this.employeeForm.value).subscribe((result)=>{
      this.router.navigate(['/employee']);
     })
  }

  empName(){ return this.employeeForm.get('empName');}
  deptId(){ return this.employeeForm.get('deptId')}

}

