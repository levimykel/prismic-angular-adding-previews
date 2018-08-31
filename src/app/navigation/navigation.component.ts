import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { PrismicService } from '../prismic.service';
import PrismicDOM from 'prismic-dom';
import { CONFIG } from '../../prismic-configuration';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  document = Object;
  PrismicDOM = PrismicDOM;
  Config = CONFIG;

  constructor(private prismicService: PrismicService) { }

  ngOnInit() {
    this.getNavigationDocument();
  }

  getNavigationDocument(): void {
    from(this.prismicService.getNavigationDocument())
      .subscribe(document => this.document = document['value']);
  }
}
