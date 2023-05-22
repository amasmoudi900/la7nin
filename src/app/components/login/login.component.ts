import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMsg: string;
  title: string = "Login";
  actualDate: any = new Date();
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      pwd: ["", [Validators.required]]
    })
  }

  login() {
    this.userService.login(this.loginForm.value).subscribe(
      (data) => {
        if (data.message == "2") {
          localStorage.setItem("userId", data.user.id);
          localStorage.setItem("userRole", data.user.role);
          (data.user.role == "admin") ?
            this.router.navigate([`admin`]) :
            this.router.navigate([`profile/${data.user.id}`]);
        }
        else {
          this.errorMsg = "Please check Email/Pwd";
        }
      }
    )
  }
}
