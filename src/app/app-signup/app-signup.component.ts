import { Component } from '@angular/core';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-signup',
  templateUrl: './app-signup.component.html',
  styleUrls: ['./app-signup.component.css']
})
export class AppSignupComponent {

  signupForm = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    roll: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private auth:AuthService, private router:Router) {}

  signup() {
    this.auth.signup(this.signupForm.value).subscribe(success => {
      console.log("success--", success);
      console.log("hi");

      alert("Registration Done Successfully!!")

    }, error => {
      console.log("error--", error);
    });
  }
}