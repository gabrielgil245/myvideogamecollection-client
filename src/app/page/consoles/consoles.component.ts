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

  _user: any;
  _platformId: number = 0;
  _games: any;
  _selectedGame: number = 0;
  _gameToEdit: number = 0;
  _observer: Subscription = new Subscription;
  _gameName: string = "";
  _gameStatus: string = "";
  _isEmpty: boolean = false;

  constructor(private userService: UserService, private route: ActivatedRoute, private gameService: GameService, private router: Router) { }

  ngOnInit(): void {
    this.userService.checkSession().subscribe(user => {
      if (!user.success) {
        this.router.navigate(['']);
      } else if (user.success) {
        this._user = user.data;
        this.loadGames();
      }
    })
  }

  ngOnDestroy(): void {
    this._observer.unsubscribe();
  }

  loadGames() {
    this._platformId = this.route.snapshot.params.platformId;
    this._observer = this._games = this.gameService.getPlatformGames(this._platformId).subscribe(game => {
      this._games = game.data;
    });
  }

  addGame(gameName: string, gameStatus: string) {
    if(gameName == "" || gameStatus == "") {
      this._isEmpty = true;
    } else {
      this._isEmpty = false;
      this.gameService.addGame(gameName, gameStatus, this._user.userId, this._platformId).subscribe(game => {
        if(game.success) {
          this.loadGames();
        }
      })
    }
    this._gameName = "";
    this._gameStatus = "";
  }

  editGame(gameId: number) {
    console.log(gameId);
    this._gameToEdit = gameId;
  }

  resetSelection() {
    this._gameToEdit = 0;
  }

  deleteGame(gameId: number) {
    this._gameToEdit = 0;
    this.gameService.deleteGame(gameId).subscribe(data => {
      if(data.success) {
        this.loadGames();
      }
    });
  }

}
