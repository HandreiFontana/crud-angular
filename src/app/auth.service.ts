import { Injectable } from '@angular/core'
import { BehaviorSubject, tap } from 'rxjs'

import { User } from './authenticate/model/user'
import { AuthenticateService } from './authenticate/services/authenticate.service'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false)
  isLoggedIn$ = this._isLoggedIn$.asObservable()

  constructor(private service: AuthenticateService) {
    const token = localStorage.getItem('@clickmvp:token')
    this._isLoggedIn$.next(!!token)
  }

  login(record: User) {
    return this.service.signIn(record).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true)
        localStorage.setItem('@clickmvp:user', response.user.name)
        localStorage.setItem('@clickmvp:token', response.token)
      })
    )
  }

  logout() {
    localStorage.removeItem('@clickmvp:user')
    localStorage.removeItem('@clickmvp:token')
    return this._isLoggedIn$.next(false)
  }
}
