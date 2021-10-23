import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  _email: string = '';
  _doesEmailExist: boolean = false;
  _doesEmailNotExist: boolean = false;
  _isValid: boolean = true;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  forgotPassword(email: string) {    
    if(email != "") {
      this.userService.forgotPassword(email).subscribe(data => {
        this._email = '';
        this._isValid = true;
        if(data.success) {
          this._doesEmailExist = true;
          this._doesEmailNotExist = false;
        } if(!data.success) {
          this._doesEmailExist = false;
          this._doesEmailNotExist = true;
        } if (this._doesEmailExist) {
          // this.router.navigate(['']); // RESET PASSWORD IS ACCESSIBLE VIA EMAIL
          setTimeout(() => {
            this.router.navigate([`/reset-password/${email}`]); // TEMPORARY
          }, 1000);
        }
      })
    } else {
      this._isValid = false;
      this._doesEmailNotExist = false;
      this._email = '';
    }
    
  }

}
