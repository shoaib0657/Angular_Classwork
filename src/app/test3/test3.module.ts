import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyformsComponent } from './myforms/myforms.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

var routes:Routes = [
  { path: 'myforms', component: MyformsComponent },
]

@NgModule({
  declarations: [
    MyformsComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)
  ],
})
export class Test3Module { }
