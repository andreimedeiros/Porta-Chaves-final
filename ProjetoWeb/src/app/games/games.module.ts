import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroGameComponent } from './cadastro-game/cadastro-game.component';
import { MaterialModule } from '../material/material.module';
import { ListagemGameComponent } from './listagem-game/listagem-game.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CompraGameComponent } from './compra-game/compra-game.component';
import { MountandbladeComponent } from './games/mountandblade/mountandblade.component';
import { KeysModule } from '../keys/keys.module';
import { CodComponent } from './games/cod/cod.component';
import { Tw3Component } from './games/tw3/tw3.component';
import { Tropico6Component } from './games/tropico6/tropico6.component';
import { SekiroComponent } from './games/sekiro/sekiro.component';



@NgModule({
  declarations: [
    CadastroGameComponent,
    ListagemGameComponent,
    CompraGameComponent,
    MountandbladeComponent,
    CodComponent,
    Tw3Component,
    Tropico6Component,
    SekiroComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    HttpClientModule,
    KeysModule

  ],
  exports: [
    CadastroGameComponent,
    ListagemGameComponent
  ]
})
export class GamesModule { }
