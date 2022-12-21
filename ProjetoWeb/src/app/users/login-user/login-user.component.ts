import { Component, Inject, Injector, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Login } from 'src/app/shared/model/login';
import { MensagemService } from 'src/app/shared/services/mensagem/mensagem.service';




@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  login: Login

  constructor( private roteador: Router, private mensagemService: MensagemService) {
  this.login = new Login('','')
  } 

  ngOnInit(): void {
  }




  logIn() {
  if (window.localStorage.getItem("token")) {
    this.mensagemService.info("Já existe um usuário logado")
  } else {
    window.localStorage.setItem("token", this.login.email)
    window.localStorage.setItem("senha", this.login.senha)

  }






  }

}