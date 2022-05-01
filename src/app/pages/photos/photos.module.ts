import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './photos.component';

import { MatCardModule} from '@angular/material/card';
import {MatButtonModule } from '@angular/material/button';
import { SafeUrlModule } from '@shared/pipes/safe-url/safe-url.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { InfiniteScrollModule } from '@shared/components/infinite-scroll/infinite-scroll.module';



@NgModule({
  declarations: [
    PhotosComponent
  ],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    MatCardModule,
    MatButtonModule,
    SafeUrlModule,
    MatProgressSpinnerModule,
    InfiniteScrollModule
  ]
})
export class PhotosModule { }
