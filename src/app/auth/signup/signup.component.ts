import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl(''),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(4)]),
    }, { validators: this.password.bind(this) });
  }

  ngOnInit() {
  }
  
  password(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('confirmPassword');
  
    if (!passwordControl || !confirmPasswordControl) {
      return null; // Handle the case when controls are not found
    }
  
    const password = passwordControl.value;
    const confirmPassword = confirmPasswordControl.value;
  
    const error = password === confirmPassword ? null : { passwordMismatch: true };
    confirmPasswordControl.setErrors(error);
  
    return error;
  }
  

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      alert('Congratulations!');
    } else {
      console.log("Form is invalid");
    }
  }

  reset() {
    this.signupForm.reset();
  }

}
