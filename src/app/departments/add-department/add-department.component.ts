import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DepartmentService } from 'src/app/service/department.service';
import { IDepartment } from 'src/model/department.model';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  deptForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private deptService : DepartmentService,
    private router : Router) {
   }

   ngOnInit(): void {
       this.initializeForm()
  }
  initializeForm() :void {
    this.deptForm = this.fb.group({
      deptName: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),

    });
  }

  get deptName() { return this.deptForm.get('deptName'); }


  onSubmit(): void{
    this.router.navigate(['/department']);
    //console.log(this.employeeForm.value);
     //this.deptService.saveDept(this.employeeForm.value).subscribe((result)=>{
    //   this.router.navigate(['/department']);
    //  })
  }

}
