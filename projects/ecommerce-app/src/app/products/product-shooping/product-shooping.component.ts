import { SaleService } from './../services/sale.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecm-product-shooping',
  templateUrl: './product-shooping.component.html',
  styleUrls: ['./product-shooping.component.scss']
})
export class ProductShoopingComponent implements OnInit {

  shopping = this.saleService.bought();

  constructor(private saleService: SaleService) { }

  ngOnInit() {
  }

}
