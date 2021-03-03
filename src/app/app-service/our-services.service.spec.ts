import { TestBed } from '@angular/core/testing';

import { OurServicesService } from './our-services.service';

describe('OurServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OurServicesService = TestBed.get(OurServicesService);
    expect(service).toBeTruthy();
  });
});
