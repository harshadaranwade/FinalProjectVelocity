import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logIn!: FormGroup;
  constructor(private fb: FormBuilder) { }

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

  }
}
