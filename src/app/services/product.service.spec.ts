// src/app/services/product.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of products', (done) => {
    service.getProducts().subscribe((products) => {
      expect(products.length).toBeGreaterThan(0);
      done();
    });
  });

  it('should return a specific product by ID', (done) => {
    service.getProductById(1).subscribe((product) => {
      expect(product?.id).toEqual(1);
      done();
    });
  });
});
