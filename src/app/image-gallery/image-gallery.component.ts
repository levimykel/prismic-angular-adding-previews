import { Component, Input } from '@angular/core';
import PrismicDOM from 'prismic-dom';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
  @Input() slice: Object;
  PrismicDOM = PrismicDOM;
}
