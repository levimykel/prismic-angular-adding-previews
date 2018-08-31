import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';

import { PrismicService } from '../prismic.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styles: []
})
export class PreviewComponent implements OnInit {
  token: string;

  constructor(
    private prismicService: PrismicService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
    });
  }

  ngOnInit() {
    this.getPreviewUrl(this.token);
  }

  getPreviewUrl(token: string): void {
    from(this.prismicService.getPreviewUrl(token))
      .subscribe(url => {
        this.router.navigateByUrl(url['value']);
      });
  }
}
