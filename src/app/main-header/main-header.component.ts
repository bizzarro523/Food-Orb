import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  userId: any
  name: string = ''
  constructor(private loginService: LoginService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.paramMap.get('userId');

    this.loginService.getUser(this.userId).subscribe((response) => {
      this.name = response.userName;
      //this.router.navigate(['list-food', this.userId]);
    })
  }

}
