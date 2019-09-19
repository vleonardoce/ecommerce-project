import { UserService } from './../../core/security/user.service';
import { SaleService } from './../services/sale.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { merge, Subscription } from 'rxjs';

@Component({
  selector: 'ecm-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.scss']
})
export class ProductOrderComponent implements OnInit, OnDestroy {

  user: firebase.User;
  product;
  quantity = 0;
  total = 0;
  stockList = [];
  userSubscription: Subscription;
  productSubscription: Subscription;

  constructor(private productService: ProductService, private modalService: NgbModal, private saleService: SaleService,
              private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userSubscription = this.userService.get().subscribe(user => {
      this.user = user;
    });

    this.productSubscription = this.productService.get(this.productService.order.product).subscribe(product => {
      this.product = product;
      this.stockList = Array.from({ length: this.product.stock }, (v, k) => k + 1);
      this.quantity = this.productService.order.quantity;
      this.checkStock();
      this.updateTotal();
    });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
    this.productSubscription.unsubscribe();
  }

  checkStock() {
    if (this.product.stock < 1) {
      this.close();
    }
  }

  updateTotal() {
    this.total = this.quantity * this.product.price;
  }

  purchase() {
    const sale = {
      user: this.user.uid,
      product: this.product,
      quantity: this.quantity,
      date: Date.now(),
    };

    merge(this.updateStock(sale), this.saveSale(sale)).subscribe(
      () => {
        this.close();
        this.router.navigate(['compras']);
      }
    );
  }

  updateStock(sale) {
    return this.productService.sell(sale);
  }

  saveSale(sale) {
    return this.saleService.save(sale);
  }

  close() {
    this.modalService.dismissAll();
  }
}
