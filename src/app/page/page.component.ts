import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

import { PrismicService } from '../prismic.service';
import PrismicDOM from 'prismic-dom';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  document = Object;
  PrismicDOM = PrismicDOM;

  constructor(
    private route: ActivatedRoute,
    private prismicService: PrismicService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        const uid = this.route.snapshot.paramMap.get('uid');
        this.getPageDocument(uid);
      }
    );
  }

  getPageDocument(uid: string): void {
    from(this.prismicService.getPageDocument(uid))
      .subscribe(document => this.document = document['value']);
  }
}
