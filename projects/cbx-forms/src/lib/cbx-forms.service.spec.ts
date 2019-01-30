import { TestBed } from '@angular/core/testing';

import { CbxFormsService } from './cbx-forms.service';

describe('CbxFormsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CbxFormsService = TestBed.get(CbxFormsService);
    expect(service).toBeTruthy();
  });
});
