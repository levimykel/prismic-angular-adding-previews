import { Component, Input } from '@angular/core';
import PrismicDOM from 'prismic-dom';

@Component({
  selector: 'app-image-highlight',
  templateUrl: './image-highlight.component.html',
  styleUrls: ['./image-highlight.component.css']
})
export class ImageHighlightComponent {
  @Input() slice: Object;
  PrismicDOM = PrismicDOM;
}
