import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DepartmentService } from 'src/app/service/department.service';
import { IDepartment } from 'src/model/department.model';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {


  department$ = new Observable<IDepartment[]>();

  deptForm = new FormGroup({
    deptName: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
  });

  constructor(private route: ActivatedRoute,
    private fb: FormBuilder,
    private deptService : DepartmentService,
    private router : Router) {
   }

   ngOnInit(): void {
      const id = +this.route.snapshot.paramMap.get('id')!;
      this.deptService.getById(id).subscribe((data)=>{
      this.initializeForm(data);
     });
  }
  initializeForm(dept : IDepartment) :void {
    this.deptForm = this.fb.group({
      deptName: new FormControl(dept.deptName,[Validators.required, Validators.minLength(3), Validators.maxLength(15)])
    });
  }


  onSubmit(): void{
      const id = +this.route.snapshot.paramMap.get('id')!;
      this.deptService.update(id, this.deptForm.value).subscribe((result)=>{
      this.router.navigate(['/department']);
     })
  }
  deptName(){ return this.deptForm.get('deptName');}
}
