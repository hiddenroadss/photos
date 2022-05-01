import { Component, OnInit } from '@angular/core';
import { ApiService } from '@core/services/api.service';
import { LocalStorageService } from '@core/services/local-storage.service';
import { BehaviorSubject, from, map, mergeMap, Observable, of, switchMap, tap, scan } from 'rxjs';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  loadImages$ = new BehaviorSubject(false);
  loadImagesObs$!: Observable<Array<{url: string; blob: Blob}>>;
  images: Array<{url: string; blob: Blob}> = [];
  isLoading$ = new BehaviorSubject(false);

  constructor(private api: ApiService, private storageService: LocalStorageService) { }

  ngOnInit(): void {
    this.loadImagesObs$ = this.loadImages$.pipe(
      tap(() => this.isLoading$.next(true)),
      switchMap(() => this.api.getImages()),
      map(values => values.map(value => ({url: URL.createObjectURL(value), blob: value}))),
      tap(value => {
        this.images.push(...value);
        this.isLoading$.next(false);
      })
    )
  }

  ngOnDestroy() {
    this.isLoading$.complete();
    this.loadImages$.complete();
  }

  async addToFavorites(blob: Blob) {
    const favoritesImages = this.storageService.getItem('favorites');
    const blobToBase64 = (blob: Blob) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function () {
          resolve(reader.result);
        };
      });
    };
    const b64 = await blobToBase64(blob);
    const jsonString = JSON.stringify(b64);
    if (favoritesImages !== null) {
      const images = JSON.parse(favoritesImages);
      images.push(jsonString);
      this.storageService.setItem('favorites', JSON.stringify(images));
    } else {
      this.storageService.setItem('favorites', JSON.stringify([jsonString]))
    }
  }

  onScroll() {
    this.loadImages$.next(true);
  }


}
