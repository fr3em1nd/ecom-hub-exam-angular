// src/services/ProductService.test.ts
import { fetchProducts, Product } from './ProductService';

// Mock the JSON file at the top level
jest.mock('../../assets/products.json', () => [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 100,
    description: 'High-quality wireless headphones with noise cancellation.',
    image: 'https://picsum.photos/200',
  },
]);

describe('ProductService', () => {
  it('fetches products successfully', async () => {
    const products = await fetchProducts();

    // The products should match the mock data defined above
    expect(products).toEqual([
       
        {
            "id": 1,
            "name": "Wireless Headphones",
            "price": 100,
            "description": "High-quality wireless headphones with noise cancellation.",
            "image": "https://picsum.photos/200"
          },
     
       
    ]);
  });

  it('returns an empty array if the file is empty', async () => {
    // Change the mock to return an empty array
    jest.mock('../../assets/productsEmpty.json', () => []);

    const products = await fetchProducts();

    expect(products).toEqual([]); // Expect an empty array
  });
});
