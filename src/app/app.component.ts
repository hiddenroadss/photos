import { Component } from '@angular/core';
import { Link } from '@core/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'photos';
  links: Link[] = [
    {
      path: '/',
      text: 'Photos'
    },
    {
      path: '/favorites',
      text: 'Favorites'
    }
  ]

  
}
