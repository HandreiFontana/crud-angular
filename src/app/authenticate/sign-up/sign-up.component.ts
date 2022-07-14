import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'

import { AuthenticateService } from '../services/authenticate.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private service: AuthenticateService,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      email: [null],
      password: [null],
    })
  }

  ngOnInit(): void {}

  onSubmit() {
    this.service.save(this.form.value).subscribe({
      next: (result) => this.onSuccess,
      error: (error) => this.onError(error),
    })
  }

  private onSuccess() {
    this._snackBar.open('Cadastro realizado com sucesso!', '', {
      duration: 3000,
    })
  }

  private onError(error: Error) {
    console.log(error)
    this._snackBar.open('Erro ao realizar o cadastro.', '', { duration: 3000 })
  }
}
