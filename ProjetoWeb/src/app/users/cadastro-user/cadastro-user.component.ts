import { Component, OnInit } from '@angular/core';
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
  // users: Array<User>;
  


  constructor(private userService: UserService) { 
    this.user = new User('','',0,'');
    // this.users =  userService.listar()

  }


  ngOnInit(): void {
  }


  adicionarUser(): void {
    this.userService.inserir(this.user).subscribe(
      userobs => console.log(userobs)
    )
    this.user = new User('','',0,'');
  }

}
