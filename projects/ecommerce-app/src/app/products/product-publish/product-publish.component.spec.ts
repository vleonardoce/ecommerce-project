import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPublishComponent } from './product-publish.component';

describe('ProductPublishComponent', () => {
  let component: ProductPublishComponent;
  let fixture: ComponentFixture<ProductPublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
