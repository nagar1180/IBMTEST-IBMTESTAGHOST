import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule} from '@angular/forms';
import { DepartmentListComponent } from './departments/department-list/department-list.component';
import { AddDepartmentComponent } from './departments/add-department/add-department.component';
import { EditDepartmentComponent } from './departments/edit-department/edit-department.component'

@NgModule({
  declarations: [
    AppComponent,
   routingComponents,
   DepartmentListComponent,
   AddDepartmentComponent,
   EditDepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
