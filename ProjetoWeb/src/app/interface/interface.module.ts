import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';





@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule,
    CommonModule
  ],
  exports: [
    MenuComponent,
    HomeComponent
  ]
})
export class InterfaceModule { }
