import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';

import { RouterModule, Routes } from '@angular/router';

var routes: Routes = [
  {path:'form', component:FormComponent},
  {path:'', redirectTo:'form', pathMatch:'full'}
]

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)
  ]
})
export class EndsemModule { }
