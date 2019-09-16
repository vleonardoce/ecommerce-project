import { TestBed } from '@angular/core/testing';

import { EcommerceMetricsService } from './ecommerce-metrics.service';

describe('EcommerceMetricsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EcommerceMetricsService = TestBed.get(EcommerceMetricsService);
    expect(service).toBeTruthy();
  });
});
