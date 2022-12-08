import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroGameComponent } from './cadastro-game/cadastro-game.component';
import { MaterialModule } from '../material/material.module';
import { ListagemGameComponent } from './listagem-game/listagem-game.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CadastroGameComponent,
    ListagemGameComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    CadastroGameComponent
  ]
})
export class GamesModule { }
