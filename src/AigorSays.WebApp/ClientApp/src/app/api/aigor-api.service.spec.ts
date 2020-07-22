import { TestBed } from '@angular/core/testing';

import { AigorApiService } from './aigor-api.service';

describe('AigorApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AigorApiService = TestBed.get(AigorApiService);
    expect(service).toBeTruthy();
  });
});
