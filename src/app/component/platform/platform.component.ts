import { Component, DoCheck, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {

  @Input()
  _platform: any;

  constructor() { }
  
  ngOnInit(): void {
  }

  editPlatform(platformId: number) {
    console.log(platformId);
  }

  deletePlatform(platformId: number) {
    console.log(platformId);
  }

}
