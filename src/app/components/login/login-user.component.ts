import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  constructor() { }

  public email = new FormControl('', [Validators.required, Validators.email]);
  public hide = true;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Informe um email válido';
    }

    return this.email.hasError('email') ? 'Não é um e-mail válido' : '';
  }

  ngOnInit(): void {
  }

}
