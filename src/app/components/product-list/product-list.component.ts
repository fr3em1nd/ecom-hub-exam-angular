import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => (this.products = data));
  }

  goToDetails(id: number) {
    this.router.navigate(['/products', id]);
  }
}
