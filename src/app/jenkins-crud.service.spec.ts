import { TestBed } from '@angular/core/testing';

import { JenkinsCrudService } from './jenkins-crud.service';

describe('JenkinsCrudService', () => {
  let service: JenkinsCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JenkinsCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
