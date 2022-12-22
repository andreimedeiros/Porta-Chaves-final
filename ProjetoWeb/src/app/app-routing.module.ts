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
import { ListagemKeysComponent } from './keys/listagem-keys/listagem-keys.component';
import { MountandbladeComponent } from './games/games/mountandblade/mountandblade.component';
import { CompraGameComponent } from './games/compra-game/compra-game.component';
import { CodComponent } from './games/games/cod/cod.component';
import { Tw3Component } from './games/games/tw3/tw3.component';
import { Tropico6Component } from './games/games/tropico6/tropico6.component';
import { SekiroComponent } from './games/games/sekiro/sekiro.component';

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
    path: "editarkey/:id",
    component: CadastroKeysComponent,
    canActivate: [AuthGuard],
    data: [redirectUnauthorizedTo]
  },
  {
    path: "keys-list",
    component: ListagemKeysComponent
  },
  {
    path: "login",
    component: LoginUserComponent
  },
  {
    path: "game/mount&blade",
    component: MountandbladeComponent
  },
  {
    path: "game/cod",
    component: CodComponent
  },
  {
    path: "game/thewitcher3",
    component: Tw3Component
  },
  {
    path: "game/tropico_6",
    component: Tropico6Component
  },
  {
    path: "game/sekiro",
    component: SekiroComponent
  },
  {
    path: "compra-game-key/:id",
    component: CompraGameComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
