import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  @Output() select = new EventEmitter<any>();

  products = [
    { id: 1, name: 'Product 1', description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', description: 'Description for Product 2' },
    // Add more products as needed
  ];

  onSelect(product: any) {
    this.select.emit(product);
  }
}
