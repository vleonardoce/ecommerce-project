import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShoopingComponent } from './product-shooping.component';

describe('ProductShoopingComponent', () => {
  let component: ProductShoopingComponent;
  let fixture: ComponentFixture<ProductShoopingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductShoopingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductShoopingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
