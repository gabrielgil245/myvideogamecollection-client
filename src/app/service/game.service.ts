import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private httpClient: HttpClient, private utilService: UtilService) { }

  getUserGames(platformId: number) {
    return this.httpClient.get<any>(`${this.utilService.getServerDomain()}/myvideogamecollection/api/game/platform/${platformId}`, { withCredentials: true });
  }
}
