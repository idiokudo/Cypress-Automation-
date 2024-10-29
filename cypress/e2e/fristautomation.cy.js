///<reference types="cypress" />

describe("this is my second test", function () {
    it("this is a retest",() => {
        cy.visit("https://automationteststore.com/");
        cy.get("img[title='Automation Test Store']").should("exist")
        cy.get("ul[id='customer_menu_top'] li a"). click ();
        cy.get("#loginFrm_loginname")
        .type ("idiokudo")
        .should("have.value","idiokudo")
        .and("have.css","background-color","rgb(255, 255, 255)")
        cy.get("button[title='Login']").should("have.css","background-color","rgb(242, 92, 39)")
        cy.get("#loginFrm_password").type ("admin123");
        cy.get("button[title='Login']").click ();
        cy.get("a[href='https://automationteststore.com/index.php?rt=product/category&path=65']").click ();
        cy.get("div[class='contentpanel'] div:nth-child(1) div:nth-child(2) a:nth-child(1) img:nth-child(1)").click();
        cy.get(".cart").click();
        cy.get("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > section:nth-child(1) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)").click ();
        cy.get("div:nth-child(6) div:nth-child(2) a:nth-child(1) img:nth-child(1)").click ();
        cy.get(".cart").click ();
        cy.get(".active.menu_home").click();
        cy.get("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > section:nth-child(1) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(7) > a:nth-child(1)").click ();
        cy.get("div[class='contentpanel'] div:nth-child(1) div:nth-child(2) a:nth-child(1) img:nth-child(1)").click ();
        cy.get(".cart").click ();
        cy.get("#cart_checkout1").click ();
        cy.get("body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > a:nth-child(2)").click();
    })
})

