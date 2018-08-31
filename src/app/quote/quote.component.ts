import { Component, Input } from '@angular/core';
import PrismicDOM from 'prismic-dom';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent {
  @Input() slice: Object;
  PrismicDOM = PrismicDOM;
}
