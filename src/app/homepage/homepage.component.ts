import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { PrismicService } from '../prismic.service';
import PrismicDOM from 'prismic-dom';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  document = Object;
  PrismicDOM = PrismicDOM;

  constructor(private prismicService: PrismicService) { }

  ngOnInit() {
    this.getHomepageDocument();
  }

  getHomepageDocument(): void {
    from(this.prismicService.getHomepageDocument())
      .subscribe(document => this.document = document['value']);
  }
}
