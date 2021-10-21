import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.checkSession().subscribe(data => {
      if (!data.success) {
        this.router.navigate(['']);
      }
    })
  }

  logout() {
    this.userService.logout().subscribe(data => {
      if(data.success) {
        this.router.navigate(['']);
      }
    })
  }

}
