import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from "@angular/forms";
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  formLogin: FormGroup

  constructor(private formBuilder: FormBuilder,
    private auth: AuthService, private roteador: Router) {
    this.formLogin = formBuilder.group({
      // email: [''],
      // senha: ['']
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required])]
    })

  }

  ngOnInit(): void {
  }

  


  login() {
    if (this.formLogin.valid) {
      // @ts-ignore
      this.auth.login(this.formLogin.value).then((user) => {
        this.roteador.navigate([''])
        console.log(`Usuário logado com sucesso`)
      }).catch(() => {
        console.log('Error ao autenticar, verifique email e senha')
      })
    }

  }

}