import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroUserComponent } from './cadastro-user/cadastro-user.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ListagemUserComponent } from './listagem-user/listagem-user.component';
import { LoginUserComponent } from './login-user/login-user.component';






@NgModule({
  declarations: [
    CadastroUserComponent,
    ListagemUserComponent,
    LoginUserComponent
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
    CadastroUserComponent,
    ListagemUserComponent,
    LoginUserComponent
  ]
})
export class UsersModule { }

