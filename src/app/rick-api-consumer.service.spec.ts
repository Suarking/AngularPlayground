import { TestBed } from '@angular/core/testing';

import { RickApiConsumerService } from './rick-api-consumer.service';

describe('RickApiConsumerService', () => {
  let service: RickApiConsumerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickApiConsumerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
