import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../model/User';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  unamePattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  pwdPattern = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
  isValidFormSubmitted = null;
  

  constructor(private formBuilder:FormBuilder, private router: Router) {
  }

  userForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.pattern(this.unamePattern)]],
    password: ['', [Validators.required, Validators.pattern(this.pwdPattern)]],
  });

  ngOnInit() {
  }

  onFormSubmit() {
    this.isValidFormSubmitted = false;
    if (this.userForm.invalid) {
       return;
    }
    this.isValidFormSubmitted = true;
    let user: User = this.userForm.value;
    console.log(this.userForm.value);
    const userName = this.userForm.controls['username'].value;
    const pass = this.userForm.controls['password'].value;
    console.log(userName, pass);
    if(userName == 'admin@gmail.com' && pass == 'Admin@12'){
      this.router.navigateByUrl('/homepage');
    } else {
      window.alert("User name or password is incorrect!")
      this.router.navigateByUrl('');
    }
    this.userForm.reset();
 }
 get username() {
    return this.userForm.get('username');
 }
 get password() {
    return this.userForm.get('password');
 }     

}
