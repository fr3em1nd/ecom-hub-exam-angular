import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
  @Input() product: any; // Define the product input property

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // You can use the route parameters to fetch the product details if needed
    const id = this.route.snapshot.paramMap.get('id');
    // Fetch the product details using the id, or assign product details directly if passed
  }
}
