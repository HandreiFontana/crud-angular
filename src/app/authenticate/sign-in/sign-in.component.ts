import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Router } from '@angular/router'

import { AuthService } from './../../auth.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  form: FormGroup

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      email: [null],
      password: [null],
    })
  }

  ngOnInit(): void {}

  onSubmit() {
    this.authService.login(this.form.value).subscribe({
      next: () => this.onSuccess(),
      error: () => this.onError(),
    })
  }

  private onSuccess() {
    this.router.navigate(['courses'])
    this._snackBar.open('Login realizado com sucesso!', '', {
      duration: 3000,
    })
  }

  private onError() {
    this._snackBar.open('Erro ao realizar login.', '', { duration: 3000 })
  }
}
