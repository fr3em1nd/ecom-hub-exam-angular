// jest.setup.js
import 'jest-fetch-mock';

beforeEach(() => {
  fetch.resetMocks(); // Clear any previous mock data
});
