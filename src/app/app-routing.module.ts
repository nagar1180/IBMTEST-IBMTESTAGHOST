import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentService } from './service/department.service';

const routes: Routes = [
{path:"employee", component:EmployeeComponent},
{path:"employee/add", component:AddemployeeComponent},
{path:"employee/edit/:id", component:EditemployeeComponent},
{path:"department", component:DepartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [EmployeeComponent, DepartmentComponent, AddemployeeComponent, EditemployeeComponent]
