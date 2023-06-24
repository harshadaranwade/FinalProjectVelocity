import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logIn!: FormGroup;
  showLogInError:boolean=false;
  userDetails={
    userName:"angular@velocity.com",
    userPassword:"Angular100"
  }
  
  constructor(private fb: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.createSignUp();
  }

  createSignUp() {
    this.logIn = this.fb.group({
      "user_email": ['', Validators.required],
      "user_pwd": ['', Validators.required]
    })
  }
  logInDashBoard() {
    const Input=this.logIn.value;
    console.log(this.logIn.value);
    if((Input.user_email==this.userDetails.userName)&&(Input.user_pwd==this.userDetails.userPassword)){
      this.router.navigate(['/dashBoard']);
    }
    else{
      this.showLogInError=true;
      this.logIn.reset();
    }
  

  }
}

