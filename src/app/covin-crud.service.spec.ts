import { TestBed } from '@angular/core/testing';

import { CovinCrudService } from './covin-crud.service';

describe('CovinCrudService', () => {
  let service: CovinCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovinCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
