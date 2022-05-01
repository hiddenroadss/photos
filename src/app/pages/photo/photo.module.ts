import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoRoutingModule } from './photo-routing.module';
import { PhotoComponent } from './photo.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    PhotoComponent
  ],
  imports: [
    CommonModule,
    PhotoRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class PhotoModule { }
