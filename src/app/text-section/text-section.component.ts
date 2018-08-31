import { Component, Input } from '@angular/core';
import PrismicDOM from 'prismic-dom';

@Component({
  selector: 'app-text-section',
  templateUrl: './text-section.component.html',
  styleUrls: ['./text-section.component.css']
})
export class TextSectionComponent {
  @Input() slice: Object;
  PrismicDOM = PrismicDOM;
}
