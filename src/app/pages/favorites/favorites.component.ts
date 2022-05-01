import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '@core/services/local-storage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favorites64: any[];

  constructor(private storageService: LocalStorageService) {
    const images = this.storageService.getItem('favorites');
    if (images) {
       this.favorites64 = JSON.parse(images).map((value: string) => JSON.parse(value));
    } else {
      this.favorites64 = [];
    }
   }

  ngOnInit(): void {
   
  }

}
