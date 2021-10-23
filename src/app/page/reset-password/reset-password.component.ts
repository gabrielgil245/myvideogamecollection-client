import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  _email: string = '';
  _password: string = '';
  _confirmPassword: string = '';

  _isPasswordMatching: boolean = true;
  _isNewPasswordCreated: boolean = false;
  _isEmpty: boolean = false;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this._email = this.route.snapshot.params.email;
    console.log(this._email);
  }

  resetPassword(password: string, confirmPassword: string) {
    if(password != confirmPassword) {
      this.resetFields();
      this._isPasswordMatching = false;
      this._isEmpty = false;
    } else if (this._email != "" && password != "" && confirmPassword != "") {
      this._isEmpty = false;
      this._isPasswordMatching = true;
      this.userService.resetPassword(this._email, password).subscribe(data => {
        this.resetFields();
        if (data.success) {
          this._isNewPasswordCreated = true;
          setTimeout(() => {
            this.router.navigate(['']);
          }, 2000)
        }
      })
    } else {
      this.resetFields();
      this._isEmpty = true;
      this._isPasswordMatching = true;
    }
  }

  resetFields() {
    this._password = '';
    this._confirmPassword = '';
  }

}
