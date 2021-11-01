import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

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

  constructor() { }
  
  ngOnInit(): void {
  }

  editPlatform(platformId: number) {
    console.log(platformId);
  }

  toDelete(platformId: number) {
    this._platformId.emit(platformId);
  }

}
