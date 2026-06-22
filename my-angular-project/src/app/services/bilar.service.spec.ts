import { TestBed } from '@angular/core/testing';

import { BilarService } from './bilar.service';

describe('BilarService', () => {
  let service: BilarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BilarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
