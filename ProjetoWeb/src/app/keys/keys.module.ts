import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CadastroKeysComponent } from './cadastro-keys/cadastro-keys.component';
import { ListagemKeysComponent } from './listagem-keys/listagem-keys.component';







@NgModule({
  declarations: [
    CadastroKeysComponent,
    ListagemKeysComponent

   
  ],
  imports: [
    FormsModule,
    MaterialModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],

  exports: [
    CadastroKeysComponent,
    ListagemKeysComponent
  ]

})
export class KeysModule { }
