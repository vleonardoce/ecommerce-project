import { TestBed } from '@angular/core/testing';

import { ProductStoreService } from './product-store.service';

describe('ProductStoreeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductStoreService = TestBed.get(ProductStoreService);
    expect(service).toBeTruthy();
  });
});
