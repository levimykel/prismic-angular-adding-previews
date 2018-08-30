import { TestBed, inject } from '@angular/core/testing';

import { PrismicService } from './prismic.service';

describe('PrismicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrismicService]
    });
  });

  it('should be created', inject([PrismicService], (service: PrismicService) => {
    expect(service).toBeTruthy();
  }));
});
