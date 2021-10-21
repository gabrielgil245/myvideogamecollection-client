import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  _username: string = "";
  _password: string = "";

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.checkSession().subscribe(data => {
      if(data.success) {
        this.router.navigate(['/dashboard']);
      }
    })
  }

  login(username: string, password: string) {
    this.userService.login(username, password).subscribe(data => {
      if(data.success) {
        this.router.navigate(['/dashboard']);
      }
    })
  }

}
