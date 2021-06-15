import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../interfaces/users';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  match: boolean = false;
  userEmail: string = '';
  userPw: string = '';
  userArray: User[] = [];

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  validateUserExists(loginForm: NgForm) {
    this.loginService.getAllUsers().subscribe((response) => {
      this.userArray = response;

      for (let i = 0; i < this.userArray.length; i++) {
        if (this.userArray[i].userEmail == this.userEmail && this.userArray[i].userPw == this.userPw) {
          alert("Successful Login")
          this.router.navigate(['list-food', this.userArray[i].id]);
          //this.router.navigate(['header', this.userArray[i].id]);
          this.match = true;
        }
      }
      if (this.match === false) {
        alert("E-Mail or Password is incorrect!")
      }
    })
  }

  forgotPw() {
    this.router.navigate(['forgotpassword']);
  }
}
