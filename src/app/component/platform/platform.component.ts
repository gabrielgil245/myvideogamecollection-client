import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PlatformService } from 'src/app/service/platform.service';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {

  @Input()
  _platform: any;
  @Output()
  _platformId = new EventEmitter();
  
  _isEditting: boolean = false;
  _platformName: string = "";
  _platformUsername: string = "";
  _isEmpty: boolean = false;

  constructor(private platformService: PlatformService) { }
  
  ngOnInit(): void {
    this._platformName = this._platform.platformName;
    this._platformUsername = this._platform.platformUsername;
  }

  toEdit() {
    this._isEditting = !this._isEditting;
    if(this._isEditting == false) {
      this._platformName = this._platform.platformName;
      this._platformUsername = this._platform.platformUsername;
    }
  }

  editPlatform(platformName: string, platformUsername: string) {
    if(platformName == "") {
      this._isEmpty = true;
      this._platformName = this._platform.platformName;
      this._platformUsername = this._platform.platformUsername;
    }else {
      this._isEmpty = false;
      this.platformService.editPlatform(this._platform.platformId, platformName, platformUsername).subscribe(platform => {
        if (platform.success) {
          this._platform.platformName = platformName;
          this._platform.platformUsername = platformUsername;
        }
        this._isEditting = !this._isEditting;
      })
    }
  }

  toDelete(platformId: number) {
    this._platformId.emit(platformId);
  }

}
