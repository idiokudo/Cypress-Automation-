///<reference types = 'cypress'/>

import Login from "../demoBlazePOM/Login"
import Products from "../demoBlazePOM/Products"
import Checkout from "../demoBlazePOM/Checkout"


describe('running a POM automation test',()=>{
    
    const login = new Login
    const product = new Products
    const checkout = new Checkout

it('automate the Login page',()=>{
    cy.visit("https://www.demoblaze.com/index.html");
    cy.get("#login2").click();
    cy.wait(1000);
    login.enterUsername();
    login.enterPassword();
    login.clickLogin();
})

it('POM on products product',()=>{
    cy.visit("https://www.demoblaze.com/index.html");
    cy.get("#login2").click();
    cy.wait(1000);
    login.enterUsername();
    login.enterPassword();
    login.clickLogin();
    product.selectSamsung();
    product.addSamsungCart();
    product.clickHome();
    product.clickMonitor();
    product.selectPc();
    product.addPcCart();
})

it('POM on the checkout page',()=>{
    cy.visit("https://www.demoblaze.com/index.html");
    cy.get("#login2").click();
    cy.wait(1000);
    login.enterUsername();
    login.enterPassword();
    login.clickLogin();
    cy.wait(3000)  
    checkout.returnToCart();
    checkout.clickPlaceOrder();
    
})
})