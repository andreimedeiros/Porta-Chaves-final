import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu'; 
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';



@NgModule({
  declarations: [],
  imports: [
    MatBadgeModule,
    MatInputModule,
    MatMenuModule,
    FormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    MatCardModule,
    CommonModule
  ],
  exports: [
    MatBadgeModule,
    CommonModule,
    MatInputModule,
    MatMenuModule,
    FormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    MatCardModule,

  ]
})
export class MaterialModule { }
