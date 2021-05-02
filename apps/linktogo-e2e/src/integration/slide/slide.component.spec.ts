describe('linktogo', () => {
  beforeEach(() => cy.visit('/iframe.html?id=slidecomponent--primary'));

  it('should render the component', () => {
    cy.get('linktogo-ui-slide').should('exist');
  });
});
