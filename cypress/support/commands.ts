/// <reference types="Cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    customCommand(): Cypress.Chainable<null>;
  }
}

Cypress.Commands.add(
  "customCommand",
  (): Cypress.Chainable<null> => {
    return cy.log("TEST LOG");
  }
);
