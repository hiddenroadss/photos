import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, mergeMap, range, tap, toArray } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getImages() {
   const source = range(1, 10);
   return source.pipe(
     mergeMap(value => {
       return this.getImage()
     }),
     toArray(),

   )
  }

  getImage() {
    return this.http.get('https://loremflickr.com/640/360', {
      responseType: 'blob'
    }).pipe(delay(2000))
  }
}
