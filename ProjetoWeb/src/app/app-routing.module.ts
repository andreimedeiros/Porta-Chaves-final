import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroGameComponent } from './games/cadastro-game/cadastro-game.component';
import { ListagemGameComponent } from './games/listagem-game/listagem-game.component';
import { HomeComponent } from './interface/home/home.component';
import { AuthGuard } from './users/auth.guard';
import { CadastroUserComponent } from './users/cadastro-user/cadastro-user.component';
import { ListagemUserComponent } from './users/listagem-user/listagem-user.component';
import { redirectUnauthorizedTo } from "@angular/fire/auth-guard";
import { AngularFireAuthGuard } from "@angular/fire/compat/auth-guard";
import { LoginUserComponent } from './users/login-user/login-user.component';
import { CadastroKeysComponent } from './keys/cadastro-keys/cadastro-keys.component';
import { PaginaGameComponent } from './games/pagina-game/pagina-game.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "cadastrar-user",
    component: CadastroUserComponent
  },
  {
    path: "cadastrar-game",
    component: CadastroGameComponent,
   
  },
  {
    path: "games-list",
    component: ListagemGameComponent
  },
  {
    path: "users-list",
    component: ListagemUserComponent
  },
  {
    path: "editaruser/:id",
    component: CadastroUserComponent
  },
  {
    path: "cadastrar-key",
    component: CadastroKeysComponent,
    canActivate: [AuthGuard],
    data: [redirectUnauthorizedTo]
  },
  {
    path: "login",
    component: LoginUserComponent
  },
  {
    path: "game/mount&blade",
    component: PaginaGameComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
