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
    return this.httpClient.get<any>(`${this.utilService.getServerDomain()}/myvideogamecollection/api/logout`, {withCredentials: true});
  }

  signUp(username: string, password: string, firstName: string, lastName: string, email: string, birthday: any, aboutMe: any) {
    return this.httpClient.post<any>(`${this.utilService.getServerDomain()}/myvideogamecollection/api/user`, {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      email: email,
      birthday: birthday,
      aboutMe: aboutMe
    }, {withCredentials: true});
  }

  forgotPassword(email: string) {
    return this.httpClient.get<any>(`${this.utilService.getServerDomain()}/myvideogamecollection/api/forgot-password/${email}`, {withCredentials: true});
  }

  resetPassword(email: string, password: string) {
    return this.httpClient.patch<any>(`${this.utilService.getServerDomain()}/myvideogamecollection/api/reset-password`, {
      email: email,
      password: password
    }, {withCredentials: true});
  }

}
