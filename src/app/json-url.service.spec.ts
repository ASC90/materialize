import { TestBed, inject } from '@angular/core/testing';

import { JsonUrlService } from './json-url.service';

describe('JsonUrlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonUrlService]
    });
  });

  it('should be created', inject([JsonUrlService], (service: JsonUrlService) => {
    expect(service).toBeTruthy();
  }));
});
