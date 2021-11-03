import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/service/game.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnChanges {

  @Input()
  _game: any;
  @Input()
  _isEditting: number = 0;
  @Output()
  _isEdittingChange = new EventEmitter();
  
  _gameName: string = "";
  _gameStatus: string = "";
  _isEmpty: boolean = false;
  
  constructor(private userService: UserService, private gameService: GameService, private router: Router) { }

  ngOnInit(): void {
    this.userService.checkSession().subscribe(user => {
      if (!user.success) {
        this.router.navigate(['']);
      } else {
        this._gameName = this._game.gameName;
        this._gameStatus = this._game.gameStatus;
      }
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this._isEditting == 0) {
      this._gameName = this._game.gameName;
      this._gameStatus = this._game.gameStatus;
    }
  }

  editGame(gameName: string, gameStatus: string) {
    if(gameName == "" || gameStatus == "") {
      this._isEmpty = true;
      this._gameName = this._game.gameName;
      this._gameStatus = this._game.gameStatus;
    }else {
      this.gameService.editGame(this._game.gameId, gameName, gameStatus).subscribe(game => {
        if (game.success) {
          this._game.gameName = gameName;
          this._game.gameStatus = gameStatus;
          this._isEdittingChange.emit(this._isEditting);
        }
        this._isEditting = 0;
      })
    }
  }

}
