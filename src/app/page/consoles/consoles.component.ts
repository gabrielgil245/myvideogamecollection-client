import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GameService } from 'src/app/service/game.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-consoles',
  templateUrl: './consoles.component.html',
  styleUrls: ['./consoles.component.css']
})
export class ConsolesComponent implements OnInit, OnDestroy {

  _platformId: number = 0;
  _games: any;
  _selectedGame: number = 0;
  _isEditting: Boolean = false;
  _observer: Subscription = new Subscription;

  constructor(private userService: UserService, private route: ActivatedRoute, private gameService: GameService, private router: Router) { }

  ngOnInit(): void {
    this.userService.checkSession().subscribe(user => {
      if (!user.success) {
        this.router.navigate(['']);
      } else if (user.success) {
        this.loadGames();
      }
    })
  }

  ngOnDestroy(): void {
    this._observer.unsubscribe();
  }

  loadGames() {
    this._platformId = this.route.snapshot.params.platformId;
    console.log(this._platformId);
    this._observer = this._games = this.gameService.getPlatformGames(this._platformId).subscribe(game => {
      this._games = game.data;
    });
  }

  editGame(gameId: number) {
    console.log(gameId);
    this._isEditting = !this._isEditting;
  }

  deleteGame(gameId: number) {
    this._isEditting = false;
    this.gameService.deleteGame(gameId).subscribe(data => {
      if(data.success) {
        this.loadGames();
      }
    });
  }

}
