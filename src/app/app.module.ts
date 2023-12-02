import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { Test3Module } from './test3/test3.module';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactListComponent } from './contact-list/contact-list.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppSignupComponent } from './app-signup/app-signup.component';

var routes:Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},

  { path: 'test3', loadChildren : () => import('./test3/test3.module').then(m => m.Test3Module)},

  { path: 'assignment1', loadChildren : () => import('./assignment1/assignment1.module').then(m => m.Assignment1Module)},

  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},

  { path: 'countries', component: CountriesComponent },

  { path: 'appsignup', component: AppSignupComponent },
  { path: 'applogin', component: AppLoginComponent },
  { path: 'appcontactList', component: ContactListComponent },

  { path: 'endsem', loadChildren: () => import('./endsem/endsem.module').then(m => m.EndsemModule) },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountriesComponent,
    ContactListComponent,
    AppLoginComponent,
    AppSignupComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
