import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor(private httpClient: HttpClient, private utilService: UtilService) { }

  getUserPlatforms(userId: number) {
    return this.httpClient.get<any>(`${this.utilService.getServerDomain()}/myvideogamecollection/api/platform/${userId}`, {withCredentials: true});
  }
}
