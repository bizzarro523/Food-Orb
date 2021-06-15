import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userName: string = '';
  userEmail: string = '';
  userPhone: string = ' ';
  userProfession: string = ' ';
  userPw: string = '';
  confirmPw: string = '';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void { }

  register(registerForm: NgForm) {
    console.log(registerForm)

    let user = {
      id: 0,
      userName: this.userName,
      userEmail: this.userEmail,
      userPhone: this.userPhone,
      userProfession: this.userProfession,
      userPw: this.userPw
    }

    this.loginService.registerUser(user).subscribe((response) => {
      console.log(response);
      this.router.navigate(['list-food', user.id])
    })
  }
}
