import { getGreeting } from '../support/app.po';

describe('dashbard', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to dashbard!');
  });
});
