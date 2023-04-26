import { TestBed } from '@angular/core/testing';

import { ControlAlumnosService } from './control-alumnos.service';

describe('ControlAlumnosService', () => {
  let service: ControlAlumnosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlAlumnosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
