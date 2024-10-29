class inventory{
        clickProduct(){
        cy.get("a[href='/products']").click();
    }
    assertColor(){
        cy.get("div[class='col-sm-9 padding-right'] div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(2)").should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
    }
    addPolo(){
        cy.get("a[href='/product_details/2']").click();
    }
    addPoloCart(){
        cy.get("button[type='button']").click();
    }
    continueShoppping(){
        cy.get(".btn.btn-success.close-modal.btn-block").click();
    }
    clickProduct1(){
        cy.get("a[href='/products']").click();
    }
    assertView(){
        cy.get("a[href='/product_details/2']").should('have.text','View Product');
    }
    addPolo1(){
        cy.get("a[href='/product_details/31']").click();
    }
    addPoloCart1(){
        cy.get("button[type='button']").click();
    }
    continueShopping1(){
        cy.get(".btn.btn-success.close-modal.btn-block").click();
    
    }
        clickCart(){
        cy.get("body > header:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)").click();
    }
}
export default inventory