import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';

import { MatCardModule } from '@angular/material/card';
import { SafeUrlModule } from '@shared/pipes/safe-url/safe-url.module';


@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    MatCardModule,
    SafeUrlModule,
  ]
})
export class FavoritesModule { }
