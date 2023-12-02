import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private auth:AuthService, private router:Router) {}

  login()
  {
    this.auth.login(this.loginForm.value).subscribe(success => {
      console.log("success--", success);
      let successData:any = success;
      let token = successData.data.token;
      let id = successData.data.id;

      //console token and id
      console.log("VNITtoken => ", token);
      console.log("VNITid => ", id);

      //local storage
      localStorage.setItem("VNITtoken", token);
      localStorage.setItem("VNITid", id);

      // navigate to contactList
      this.router.navigate(['/appcontactList']);

    }, error => {
      console.log("error--", error);
    });
  }

}
