class checkout{
    clickCart(){
        cy.get("body > header:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)").click();
    }
    clickCheckout(){
        cy.get(".btn.btn-default.check_out").click();
    }
    typeComment(){
        cy.get("textarea[name='message']").type("your products are amazing, thank you");
    }
    clickPlaceOrder(){
        cy.get(".btn.btn-default.check_out").click();
    }
}
export default checkout