import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, Product } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router // Inject Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id).subscribe(data => {
      this.product = data;
    });
  }

  goBack(): void {
    this.router.navigate(['/products']); // Navigate back to product list
  }
  
  getImageWithRandomNumber(imageUrl: string): string {
    const randomNum = Math.floor(Math.random() * 10000); // Generate a random number
    return `${imageUrl}?rand=${randomNum}`; // Append it to the URL
  }
}
