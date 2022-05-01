import { Component, Input, OnInit } from '@angular/core';

import { Link} from '@core/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() links!: Link[];

  constructor() { }

  ngOnInit(): void {
  }

}
