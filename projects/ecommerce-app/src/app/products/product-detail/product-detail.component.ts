import { ProductOrderComponent } from './../product-order/product-order.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ecm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  productSubscription: Subscription;
  product = null;
  stockList = [];
  quantity = 1;

  constructor(private route: ActivatedRoute, private productService: ProductService, private modalService: NgbModal) { }

  ngOnInit() {
    const uid = this.route.snapshot.paramMap.get('uid');
    this.productSubscription = this.productService.get(uid).subscribe(response => {
      this.product = response;
      this.stockList = Array.from({ length: this.product.stock }, (v, k) => k + 1);
    });
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }

  order() {
    this.productService.order = {
      product: this.product.id,
      quantity: this.quantity
    };
    this.modalService.open(ProductOrderComponent, { size: 'lg', centered: true });
  }
}
