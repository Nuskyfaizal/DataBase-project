import { TestBed } from '@angular/core/testing';

import { WebReqServiceService } from './web-req-service.service';

describe('WebReqServiceService', () => {
  let service: WebReqServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebReqServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
