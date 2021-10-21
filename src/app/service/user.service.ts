import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private utilService: UtilService) { }

  login(username: string, password: string) {
    return this.httpClient.post<any>(`${this.utilService.getServerDomain()}/myvideogamecollection/api/login`, {
      username: username,
      password: password
    }, {withCredentials: true});
  }

  checkSession() {
    return this.httpClient.get<any>(`${this.utilService.getServerDomain()}/myvideogamecollection/api/check-session`, {withCredentials: true});
  }

  logout() {
    return this.httpClient.get<any>(`${this.utilService.getServerDomain()}/myvideogamecollection/api/logout`, { withCredentials: true });
  }

}
