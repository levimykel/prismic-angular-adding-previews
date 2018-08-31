import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageHighlightComponent } from './image-highlight.component';

describe('ImageHighlightComponent', () => {
  let component: ImageHighlightComponent;
  let fixture: ComponentFixture<ImageHighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageHighlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
