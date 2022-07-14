import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { User } from '../model/user'

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  private readonly API = 'http://172.23.87.34:3333'

  constructor(private httpClient: HttpClient) {}

  signIn(record: User) {
    return this.httpClient.post<User>(`${this.API}/sessions`, record)
  }

  save(record: User) {
    return this.httpClient.post<User>(`${this.API}/users`, record)
  }
}
