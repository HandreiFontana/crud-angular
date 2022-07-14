import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { AuthService } from './auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'crud-angular'

  constructor(public authService: AuthService, private route: Router) {}

  signOut() {
    this.authService.logout()
    this.route.navigate([''])
  }
}
