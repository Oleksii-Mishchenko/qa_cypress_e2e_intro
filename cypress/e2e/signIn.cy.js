/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'user001';
  const email = 'user001@hmail.com';
  const password = 'Test1234';

  it('should provide an ability to log in', () => {
    cy.visit('/');

    cy.contains('a', 'Sign in').click();

    cy.url().should('equal', `${Cypress.config().baseUrl}/user/login`);

    cy.get('input[placeholder="Email"]').type(email);

    cy.get('input[placeholder="Password"]').type(password);

    cy.contains('button[type="submit"]', 'Sign in').click();

    cy.get('nav').contains('a', username).should('be.visible');

    cy.url().should('equal', `${Cypress.config().baseUrl}/`);
  });
});
