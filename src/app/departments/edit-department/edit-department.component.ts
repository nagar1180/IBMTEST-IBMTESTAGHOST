import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DepartmentService } from 'src/app/service/department.service';
import { IDepartment } from 'src/model/department.model';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {

  deptForm!: FormGroup;
  department$ = new Observable<IDepartment[]>();
  constructor(
    private fb: FormBuilder,
    private deptService : DepartmentService,
    private router : Router) {
   }

   ngOnInit(): void {
    this.department$ = this.deptService.getAll();
    this.initializeForm()
  }
  initializeForm() :void {
    this.deptForm = this.fb.group({
      deptName: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)])
    });
  }


  onSubmit(): void{
      this.deptService.saveEmployee(this.deptForm.value).subscribe((result)=>{
      this.router.navigate(['/employee']);
     })
  }
  deptName(){ return this.deptForm.get('empName');}
}
