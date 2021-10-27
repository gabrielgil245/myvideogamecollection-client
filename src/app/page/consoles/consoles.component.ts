import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'app-consoles',
  templateUrl: './consoles.component.html',
  styleUrls: ['./consoles.component.css']
})
export class ConsolesComponent implements OnInit, OnDestroy {

  _platformId: number = 0;
  _games: any;
  _selectedGame: number = 0;
  _observer: Subscription = new Subscription;

  constructor(private route: ActivatedRoute, private gameService: GameService) { }

  ngOnInit(): void {
    this._platformId = this.route.snapshot.params.platformId;
    console.log(this._platformId);
    this._observer = this._games = this.gameService.getUserGames(this._platformId).subscribe(game => {
      this._games = game.data;
      console.log(this._games);
    });
  }

  ngOnDestroy(): void {
    this._observer.unsubscribe();
  }

  editGame(gameId: number) {
    console.log(gameId);
  }

  deleteGame(gameId: number) {
    console.log(gameId);
  }

}
