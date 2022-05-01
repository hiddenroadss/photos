import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '@core/services/local-storage.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  imageIndex: number;
  image!: string;
  images!: string[];

  constructor(private storageService: LocalStorageService, private route: ActivatedRoute, private router: Router) {
    this.imageIndex = Number(this.route.snapshot.params["id"]);
   }

  ngOnInit(): void {
    const favorites = this.storageService.getItem('favorites');
    if (favorites) {
      this.images = JSON.parse(favorites);
      const image = this.images.find((item, index) => index === this.imageIndex);
      if (image) {
        this.image = JSON.parse(image);
      } else {
        this.router.navigate(['/favorites'])
      }
    }
  }

  removeFromFavorites() {
    const updatedImages = this.images.filter((item, index) => index !== this.imageIndex);
    this.storageService.setItem('favorites', JSON.stringify(updatedImages));
    this.router.navigate(['/favorites']);
  }

}
