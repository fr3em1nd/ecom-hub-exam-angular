// product-list.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { ProductService } from './product.service';
import { of } from 'rxjs';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productService: jasmine.SpyObj<ProductService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ProductService', ['fetchProducts']);

    TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      providers: [{ provide: ProductService, useValue: spy }]
    });

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService) as jasmine.SpyObj<ProductService>;
  });

  it('should fetch products on init', () => {
    const mockProducts = [{ id: 1, name: 'Product 1', image: 'image1.jpg' }];
    productService.fetchProducts.and.returnValue(of(mockProducts));

    component.ngOnInit();

    expect(component.products.length).toBe(1);
    expect(component.products).toEqual(mockProducts);
    expect(productService.fetchProducts).toHaveBeenCalled();
  });
});
