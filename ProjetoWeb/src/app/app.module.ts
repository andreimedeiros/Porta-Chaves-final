
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { GamesModule } from './games/games.module';
import { InterfaceModule } from './interface/interface.module';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FirestoreModule } from './firestore/firestore.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { KeysModule } from './keys/keys.module';
import { NgModule } from '@angular/core';







@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    MatInputModule,
    FormsModule,
    MaterialModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UsersModule,
    GamesModule,
    KeysModule,
    InterfaceModule,
    HttpClientModule,
    FirestoreModule,
    MatSnackBarModule,


  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
