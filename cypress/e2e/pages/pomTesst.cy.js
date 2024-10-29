/// <reference types = 'cypress'/>
import Login from "../pages/Login"
import inventory from "../pages/inventory"
import checkout from "../pages/checkout"

describe('running an automation test', () =>{   
    
    const login = new Login();
    const Inventory = new inventory
    const Checkout = new checkout

let userdata;
before (()=>{
    cy.fixture("userInfo.json").then((data)=>{
        userdata = data.userData;
    });
});

beforeEach(()=>{
    cy.visit('https://automationexercise.com/login');
    login.validateLogin();
    login.validateLoginBtn();
        login.enterEmail(userdata.email);
        login.enterPassword(userdata.password);
        login.clickLogin();
})

afterEach(()=>{
    cy.url().should('contain','automation');
})
after(()=>{
    cy.get("a[href='/logout']").click();
})
    it('explore the login page', () =>{
        

    })

    it ('naviagate the product page', ()=>{
     

        Inventory.clickProduct();
        Inventory.assertView();
        Inventory.assertColor();
        Inventory.addPolo();
        Inventory.addPoloCart();
        Inventory.continueShoppping();
        Inventory.clickProduct1();
        Inventory.addPolo1();
        Inventory.addPoloCart();
        Inventory.continueShopping1();
       
        
       
    })
    it("explore the checkout page", ()=>{
        Checkout.clickCart();
        Checkout.clickCheckout();
        Checkout.typeComment();
        Checkout.clickPlaceOrder();
    })

})