import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private httpClient: HttpClient, private utilService: UtilService) { }

  getPlatformGames(platformId: number) {
    return this.httpClient.get<any>(`${this.utilService.getServerDomain()}/myvideogamecollection/api/game/platform/${platformId}`, { withCredentials: true });
  }

  addGame(gameName: string, gameStatus: string, userId: number, platformId: number) {
    return this.httpClient.post<any>(`${this.utilService.getServerDomain()}/myvideogamecollection/api/game`, {
      gameName: gameName,
      gameStatus: gameStatus,
      user: {
        userId: userId
      },
      platform: {
        platformId: platformId
      }
    }, { withCredentials: true });
  }

  deleteGame(gameId: number) {
    return this.httpClient.delete<any>(`${this.utilService.getServerDomain()}/myvideogamecollection/api/game/${gameId}`, { withCredentials: true });
  }
}
