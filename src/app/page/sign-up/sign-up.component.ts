import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  _username: string = '';
  _password: string = '';
  _firstName: string = '';
  _lastName: string = '';
  _email: string = '';
  _birthday: any = null; //YYYY-MM-DD
  _aboutMe: any = null;
  _isUserCreated: boolean = false;
  _isValid: boolean = true;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  signUp(username: string, password: string, firstName: string, lastName: string, email: string, birthday: any, aboutMe: any) {
    console.log(birthday + " " + aboutMe);

    if(username != "" && password != "" && firstName != "" && lastName != "" && 
    email != "") {
      this._isValid = true;
      if(birthday == "") birthday = null;
      if(aboutMe == "") aboutMe = null;
      this._isUserCreated = true;
      this.userService.signUp(username, password, firstName, lastName, email, birthday, aboutMe).subscribe(data => {
        this.resetFields();
        if (data.success) {
          this._isUserCreated = true;
          setTimeout(() => {
            this.router.navigate(['']);
          }, 3000)
        }
      })
    } else this._isValid = false;

    console.log(this._isValid);
  }

  resetFields() {
    this._username = '';
    this._password = '';
    this._firstName = '';
    this._lastName = '';
    this._email = '';
    this._birthday = '';
    this._aboutMe = '';
  }

}
