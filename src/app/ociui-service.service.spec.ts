import { TestBed } from '@angular/core/testing';

import { OciuiServiceService } from './ociui-service.service';

describe('OciuiServiceService', () => {
  let service: OciuiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OciuiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
