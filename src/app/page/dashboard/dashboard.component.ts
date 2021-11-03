import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PlatformService } from 'src/app/service/platform.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  _user: any;
  _platforms: any;
  _observer: Subscription = new Subscription;
  _platformName: string = "";
  _platformUsername: string = "";
  _isEmpty: boolean = false;

  constructor(private userService: UserService, private platformService: PlatformService, private router: Router) { }
    
  ngOnInit(): void {
    this.userService.checkSession().subscribe(user => {
      this._user = user.data;
      if (!user.success) {
        this.router.navigate(['']);
      } else if(user.success) {
        this.retrievePlatforms();
      }
    })
  }

  ngOnDestroy(): void {
    this._observer.unsubscribe();
  }

  retrievePlatforms() {
    this._observer = this._platforms = this.platformService.getUserPlatforms(this._user.userId).subscribe(platform => {
      this._platforms = platform.data;
    });
  }

  addPlatform(platformName: string, platformUsername: string) {
    if(platformName == "") {
      this._isEmpty = true;
    } else {
      this._isEmpty = false;
      this.platformService.addPlatform(platformName, platformUsername, this._user).subscribe(platform => {
        if(platform.success) {
          this.retrievePlatforms();
        }
      })
    }
    this._platformName = "";
    this._platformUsername = "";
  }

  deletePlatform(platformId: number) {
    this.platformService.deletePlatform(platformId).subscribe(platform => {
      if(platform.success) {
        this.retrievePlatforms();
      }
    })
  }

}
