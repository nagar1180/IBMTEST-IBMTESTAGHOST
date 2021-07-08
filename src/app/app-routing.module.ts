import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { AddDepartmentComponent } from './departments/add-department/add-department.component';
import { DepartmentListComponent } from './departments/department-list/department-list.component';
import { EditDepartmentComponent } from './departments/edit-department/edit-department.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentService } from './service/department.service';

const routes: Routes = [
{path:"employee", component:EmployeeComponent},
{path:"employee/add", component:AddemployeeComponent},
{path:"employee/edit/:id", component:EditemployeeComponent},
{path:"department", component:DepartmentListComponent},
{path:"department/add", component:AddDepartmentComponent},
{path:"department/edit/:id", component:EditDepartmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [EmployeeComponent, DepartmentListComponent, AddemployeeComponent, EditemployeeComponent,AddDepartmentComponent,EditDepartmentComponent]
