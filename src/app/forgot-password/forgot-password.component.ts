import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../interfaces/users';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  match: boolean = false;
  userEmail: string = "";
  userArray: User[] = [];

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  reset(resetForm: NgForm) {
    this.loginService.getAllUsers().subscribe((response) => {
      this.userArray = response;

      for (let i = 0; i < this.userArray.length; i++) {
        if (this.userArray[i].userEmail == this.userEmail) {
          alert("Password Reset")
          this.router.navigate(['login']);
          this.match = true;
        }
      }
      if (this.match === false) {
        alert("E-Mail or Password is incorrect!")
      }
    })
  }

}
