/// <reference types="cypress" />
/// <reference types="cypress-xpath" /> 

describe('Automation Exercise', ()=> {

  it("proceed to payment", ()=> {
        cy.visit('https://automationexercise.com/');
        cy.get("a[href='/login']").click();
        cy.get("input[data-qa='login-email']").type('deviesmercy74@gmail.com');
        cy.get("input[placeholder='Password']").type('GODFREY');
        cy.get("button[data-qa='login-button']").click();  
        cy.wait(3000);
    cy.get("div.header-middle div.container div.row div.col-sm-8 div.shop-menu.pull-right ul.nav.navbar-nav li:nth-child(3) > a:nth-child(1)").click();
    cy.get(".btn.btn-default.check_out").click();
    cy.get("textarea[name='message']").type('the items are nice');

    cy.get(".btn.btn-default.check_out").click();

    cy.get("input[name='name_on_card']").type('Mercy iWod isip');
    cy.get("input[name='card_number']").type(123456789);
    cy.get("input[placeholder='ex. 311']").type(123);
    cy.get("input[placeholder='MM']").type('01');
    cy.get("input[placeholder='YYYY']").type(2000);
    cy.get("#submit").click();
    
    })
    
})