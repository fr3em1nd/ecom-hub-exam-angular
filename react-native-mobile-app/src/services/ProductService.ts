// src/services/ProductService.ts
export const fetchProducts = async (): Promise<Product[]> => {
    // Use require to load the local JSON file
    const response = require('../../assets/products.json');
  
    // You can return the response directly as it's already an object
    return response;
  };
  
  export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
  }
  