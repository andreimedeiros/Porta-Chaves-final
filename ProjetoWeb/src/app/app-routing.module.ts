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
    path: "game/cod3",
    component: MountandbladeComponent
  },
  {
    path: "the_witcher3",
    component: MountandbladeComponent
  },
  {
    path: "game/tropico6",
    component: MountandbladeComponent
  },
  {
    path: "game/sekiro",
    component: MountandbladeComponent
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
