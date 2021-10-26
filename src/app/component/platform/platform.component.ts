import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {

  @Input()
  _platform: any;
  _selectedPlatform: number = 0;
  _selectedGame: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
