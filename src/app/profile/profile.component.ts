import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interfaces/users';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!: User;
  userId: any;

  constructor(private loginService: LoginService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.paramMap.get('userId');

    this.loginService.getUser(this.userId).subscribe((response) => {
      this.user = response;
      //this.router.navigate(['list-food', this.userId]);
    })
  }

}
