import { TestBed } from '@angular/core/testing';

import { MovieApiSeviceService } from './movie-api-sevice.service';

describe('MovieApiSeviceService', () => {
  let service: MovieApiSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieApiSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
