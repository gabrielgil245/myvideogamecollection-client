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

  addPlatform(platformName: string, platformUsername: string, user: any) {
    return this.httpClient.post<any>(`${this.utilService.getServerDomain()}/myvideogamecollection/api/platform`, {
      platformName: platformName,
      platformUsername: platformUsername,
      user: user
    }, { withCredentials: true });
  }

  editPlatform(platformId: number, platformName: string, platformUsername: string) {
    return this.httpClient.patch<any>(`${this.utilService.getServerDomain()}/myvideogamecollection/api/platform`, {
      platformId: platformId,
      platformName: platformName,
      platformUsername: platformUsername
    }, { withCredentials: true });
  }

  deletePlatform(platformId: number) {
    return this.httpClient.delete<any>(`${this.utilService.getServerDomain()}/myvideogamecollection/api/platform/${platformId}`, { withCredentials: true });
  }

}
