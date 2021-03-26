import { getCategories, getImages } from '../support/image-feed-view.po';

describe('image-feed-view', () => {
  beforeEach(() => {
    const endpoint = `${Cypress.env('NX_API_URL')}/graphql`;
    cy.intercept('POST', endpoint, (req) => {
      if (req.body.operationName.includes('GetCategories')) {
        req.alias = 'getCategoriesQuery';
      }
    });
    cy.intercept('POST', endpoint, (req) => {
      if (req.body.operationName.includes('GetImages')) {
        req.alias = 'getImagesQuery';
      }
    });
    cy.visit('/');
  });

  it('should display a list of categories', () => {
    const labels = [
      'all',
      'boxes',
      'clothes',
      'hats',
      'sinks',
      'space',
      'sunglasses',
      'ties',
    ];

    cy.wait('@getCategoriesQuery');
    getCategories()
      .should('have.length', 8)
      .each(($category, idx) =>
        cy.wrap($category).should('have.text', labels[idx])
      );
  });

  it('should load the first 16 images', () => {
    cy.wait('@getImagesQuery');
    getImages().should('have.length', 16);
  });
});
