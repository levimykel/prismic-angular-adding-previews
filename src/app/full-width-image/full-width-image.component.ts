import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-full-width-image',
  templateUrl: './full-width-image.component.html',
  styleUrls: ['./full-width-image.component.css']
})
export class FullWidthImageComponent {
  @Input() slice: Object;
}
