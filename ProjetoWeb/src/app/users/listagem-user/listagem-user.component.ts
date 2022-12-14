import { Component, OnInit } from '@angular/core';
import User from 'src/app/shared/model/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-listagem-user',
  templateUrl: './listagem-user.component.html',
  styleUrls: ['./listagem-user.component.scss']
})

export class ListagemUserComponent implements OnInit {


  users: Array<User>;

  constructor(private userService: UserService, private roteador: Router  ) { 
    this.users = [];
  }

  ngOnInit(): void {
    this.userService.listar().subscribe(
      usersobs => this.users = usersobs
    );
  }

  removerUser(user: User): void {
    const id = user.cpf || '';
    this.userService.removerUser(id).subscribe(
      removido => {
        console.log(removido);
        const indxUsuario = this.users.findIndex(u => u.cpf === user.cpf);

        if (indxUsuario > -1) {
          this.users.splice(indxUsuario, 1);
        }

      }
    );
  }
}
