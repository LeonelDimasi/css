import { TestBed } from '@angular/core/testing';

import { SubirfotoService } from './subirfoto.service';

describe('SubirfotoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubirfotoService = TestBed.get(SubirfotoService);
    expect(service).toBeTruthy();
  });
});
