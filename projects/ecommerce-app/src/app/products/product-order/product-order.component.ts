import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'ecm-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.scss']
})
export class ProductOrderComponent implements OnInit {

  product;
  quantity = 0;
  total = 0;
  stockList = [];

  constructor(private productService: ProductService, private modalService: NgbModal) { }

  ngOnInit() {
    this.productService.get(this.productService.order.product).subscribe(product => {
      this.product = product;
      this.stockList = Array.from({ length: this.product.stock }, (v, k) => k + 1);
      this.quantity = this.productService.order.quantity;
      this.updateTotal();
    });
  }

  updateTotal() {
    this.total = this.quantity * this.product.price;
  }

  close() {
    this.modalService.dismissAll();
  }
}
