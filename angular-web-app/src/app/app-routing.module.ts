import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

// Define the application routes
const routes: Routes = [
  // Route for displaying the list of products
  { path: 'products', component: ProductListComponent },
  
  // Route for displaying details of a specific product based on its ID
  { path: 'products/:id', component: ProductDetailComponent },
  
  // Default route: redirects to the products list when the application is accessed with an empty path
  { path: '', redirectTo: '/products', pathMatch: 'full' },
];

// Create and configure the NgModule for routing
@NgModule({
  // Import the RouterModule with the defined routes
  imports: [RouterModule.forRoot(routes)],
  
  // Export RouterModule so that it can be used in other modules
  exports: [RouterModule]
})

// Export the AppRoutingModule class to be imported in the main application module
export class AppRoutingModule { }
