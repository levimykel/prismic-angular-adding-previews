import { Component, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { PrismicService } from '../prismic.service';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditButtonComponent implements OnChanges {
  @Input() documentId: string;

  constructor(private prismicService: PrismicService) { }

  ngOnChanges() {
    this.prismicService.toolbar();
  }
}
