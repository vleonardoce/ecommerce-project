import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductOrderComponent } from '../product-order/product-order.component';

@Component({
  selector: 'ecm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products = this.productService.getAll();

  constructor(private productService: ProductService) { }

}
