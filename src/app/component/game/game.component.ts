import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input()
  _game: any;
  _toEdit: number = 0;
  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.checkSession().subscribe(user => {
      if (!user.success) {
        this.router.navigate(['']);
      }
    })
  }
    

}
