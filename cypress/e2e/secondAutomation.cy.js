///<reference types="cypress"/>  

describe('this is my second automation',()=>{
    it('navigate all through the site',()=>{
        cy.visit("https://www.demoblaze.com/index.html");
        cy.get("#login2").click();
        cy.wait(1000);
        cy.get("#nava").should('contain','PRODUCT STORE');
        cy.url().should('include','demoblaze');
        cy.xpath("//input[@id='loginusername']").type("Godfrey Nyong");
        cy.xpath("//input[@id='loginpassword']").type("idiokudo");
        cy.xpath("//button[normalize-space()='Log in']").click();
        cy.get("div[id='tbodyid'] div:nth-child(1) div:nth-child(1) a:nth-child(1) img:nth-child(1)").click();
        cy.get(".btn.btn-success.btn-lg").click();
        cy.get("li[class='nav-item active'] a[class='nav-link']").click();
        cy.get("body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(4)").click();
        cy.get("img[src='imgs/apple_cinema.jpg']").click();
        cy.get(".btn.btn-success.btn-lg").click();
        cy.get("#cartur").click();
        cy.get(".btn.btn-success").click();
        cy.wait(8000);
        cy.get("#name").type('Eyen Ekpo');
        cy.get("#country").type('United Kingdom');
        cy.xpath("//input[@id='city']").type('Birmingham');
        cy.xpath("//input[@id='card']").type("123473654673876478");
        cy.xpath("//input[@id='month']").type("August");
        cy.xpath("//input[@id='year']").type("2021");
        cy.wait(4000);
        cy.get("button[onclick='purchaseOrder()']").click();
    })
})