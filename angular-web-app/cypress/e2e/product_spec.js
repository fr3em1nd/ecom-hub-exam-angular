describe('Product Page', () => {
  it('should load products and navigate to details', () => {
    cy.visit('/products'); // Adjust the URL to your routing setup

    // Verify that products are listed
    cy.get('mat-card').should('have.length.greaterThan', 0);

    // Click on the first product and check the detail page
    cy.get('mat-card').first().click();
    cy.url().should('include', '/product'); // Adjust based on your routing

    // Verify product detail
    cy.get('h2').should('exist');
  });
});

