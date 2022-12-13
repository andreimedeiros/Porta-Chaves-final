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
}
