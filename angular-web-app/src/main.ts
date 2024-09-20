import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component'; // Ensure the correct path
import { ProductListComponent } from './app/components/product-list/product-list.component';
import { ProductDetailComponent } from './app/components/product-detail/product-detail.component';

const routes = [
  { path: '', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
  ],
});
