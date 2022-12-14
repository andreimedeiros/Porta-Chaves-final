import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import User from 'src/app/shared/model/user';
import { UserFirestoreService } from 'src/app/shared/services/firestore/user/user-firestore.service';
import { UserService } from 'src/app/shared/services/user/user.service';



@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.component.html',
  styleUrls: ['./cadastro-user.component.scss']
})
export class CadastroUserComponent implements OnInit {
  
  user: User;
  inserting = true;
  nomeBotao = 'Cadastrar';
  


  constructor(private userService: UserService, private routerOn: ActivatedRoute) { 
    this.user = new User('');
    if (routerOn.snapshot.paramMap.has('id')) {
      const idEdicao = routerOn.snapshot.paramMap.get('id');
      if (idEdicao) {
        this.inserting = false;
        this.nomeBotao = 'Atualizar';
        const userFind = this.userService.pesquisarPorId(idEdicao).subscribe(
          userFind => this.user = userFind
        );
      }
    }
  }

 


  ngOnInit(): void {
  }


InserirouAtualizarUser() {
  console.log(this.user.id);
    if (this.inserting) {
      this.userService.inserir(this.user).subscribe(
        userobs => console.log(userobs));
      // this.userService.inserir(this.user).subscribe(
        // usuarioInserido => this.mensagemService.info('Usuário cadastrado com sucesso!')
      // );
      this.user = new User('');
    } else {
      this.userService.atualizar(this.user).subscribe(
        userobs => console.log(userobs));
        console.log("Atualizando")
      }
      // this.userService.atualizar(this.user).subscribe(
      //   // usuarioAtualizado => this.mensagemService.erro('Usuário atualizado com sucesso!')
      // )
  }

  






/*  CÓDIGOS ANTIGOS */

 // constructor(private userService: UserService) { 
  //   this.user = new User('');
  //   // this.users =  userService.listar()

  // }
  

  // adicionarUser(): void {
  //   this.userService.inserir(this.user).subscribe(
  //     userobs => console.log(userobs)
  //   )
  //   this.user = new User('');
  // }
}

