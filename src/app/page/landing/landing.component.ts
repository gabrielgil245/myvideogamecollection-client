import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  _username: string = '';
  _password: string = '';
  _isCredentialsCorrect: boolean = false;
  _isCredentialsIncorrect: boolean = false;
  _isEmpty: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.checkSession().subscribe(data => {
      if(data.success) {
        this.router.navigate(['/dashboard']);
      }
    })
  }

  login(username: string, password: string) {
    if(username != "" && password != "") {
      this._isEmpty = false;
      this.userService.login(username, password).subscribe(data => {
        this.resetFields();
        if(data.success) {
          this._isCredentialsCorrect = true;
          this._isCredentialsIncorrect = false;
        } if(!data.success) {
          this._isCredentialsCorrect = false;
          this._isCredentialsIncorrect = true;
        } if (this._isCredentialsCorrect) {
          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 1000);
        }
      })
    } else {
      this._isCredentialsIncorrect = false;
      this._isEmpty = true;
    }
  }

  resetFields() {
    this._username = '';
    this._password = '';
  }

}


