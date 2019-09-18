import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'ecm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  id = this.route.snapshot.paramMap.get('uid');
  item = this.productService.get(this.id);

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
  }

}
