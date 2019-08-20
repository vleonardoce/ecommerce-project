import { TestBed } from '@angular/core/testing';

import { EcommerceUiService } from './ecommerce-ui.service';

describe('EcommerceUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EcommerceUiService = TestBed.get(EcommerceUiService);
    expect(service).toBeTruthy();
  });
});
