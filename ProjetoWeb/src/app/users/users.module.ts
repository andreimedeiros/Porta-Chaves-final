import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroUserComponent } from './cadastro-user/cadastro-user.component';
import { MaterialModule } from '../material/material.module';
import {FormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';






@NgModule({
  declarations: [
    CadastroUserComponent
  ],
  imports: [
    FormsModule,
    MaterialModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [
    CadastroUserComponent
  ]
})
export class UsersModule { }

