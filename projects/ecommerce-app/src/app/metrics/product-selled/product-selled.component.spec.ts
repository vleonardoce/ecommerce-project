import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSelledComponent } from './product-selled.component';

describe('ProductSelledComponent', () => {
  let component: ProductSelledComponent;
  let fixture: ComponentFixture<ProductSelledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSelledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSelledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
