describe ('Login', () => {
    it('CT-006 - Produto existente', () => {
        cy.visit('mercadolivre.com.br/');
        cy.get('.nav-search-input').type('notebook{enter}');
        cy.url().should('include', 'notebook');
        
        });

    it('CT-007 - Produto inexistente', () => {
        cy.visit('mercadolivre.com.br/');
        cy.get('.nav-search-input').type('Produto1293943#{enter}');
       });

    it('CT-008 - Termo permanece no campo', () => {
        cy.visit('mercadolivre.com.br/');
        cy.get('.nav-search-input').type('pizza{enter}');
;
        });
    });