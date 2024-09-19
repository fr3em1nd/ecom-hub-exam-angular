import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { ProductService } from '../../services/product.service';
import { of } from 'rxjs';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productService: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      providers: [
        {
          provide: ProductService,
          useValue: {
            getProducts: () => of([{ id: 1, name: 'Product 1', price: 100 }]),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService);
    fixture.detectChanges();
  });

  it('should display a list of products', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-list-item span').textContent).toContain('Product 1');
  });

  it('should navigate to product detail on button click', () => {
    spyOn(component, 'goToDetails');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.goToDetails).toHaveBeenCalledWith(1);
  });
});
