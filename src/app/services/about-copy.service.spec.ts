import { TestBed, inject } from '@angular/core/testing';

import { AboutCopyService } from './about-copy.service';

describe('AboutCopyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AboutCopyService]
    });
  });

  it('should be created', inject([AboutCopyService], (service: AboutCopyService) => {
    expect(service).toBeTruthy();
  }));
});
