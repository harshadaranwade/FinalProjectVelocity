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

    console.log(this.logIn.value);
    this.router.navigate(['/dashBoard']);

  }
}
