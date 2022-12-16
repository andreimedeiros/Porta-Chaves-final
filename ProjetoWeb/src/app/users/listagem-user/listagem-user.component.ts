import { Component, OnInit } from '@angular/core';
import User from 'src/app/shared/model/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user/user.service';
import { MensagemService } from 'src/app/shared/services/mensagem/mensagem.service';

@Component({
  selector: 'app-listagem-user',
  templateUrl: './listagem-user.component.html',
  styleUrls: ['./listagem-user.component.scss']
})

export class ListagemUserComponent implements OnInit {


  users: Array<User>;

  constructor(private userService: UserService, private roteador: Router, private mensagemService: MensagemService  ) { 
    this.users = [];
  }

  ngOnInit(): void {
    this.userService.listar().subscribe(
      usersobs => this.users = usersobs
    );
  }

  removerUser(user: User): void {
    const id = user.id || '';
    this.userService.removerUser(id).subscribe(
      removido => {
        console.log(removido);
        const indxUsuario = this.users.findIndex(u => u.id === user.id);
        this.mensagemService.warning("Usuário Removido com Sucesso.")


        if (indxUsuario > -1) {
          this.users.splice(indxUsuario, 1);
        }

      }
    );
  }
}
