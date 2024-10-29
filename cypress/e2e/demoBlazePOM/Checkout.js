class Checkout{
    returnToCart(){
        cy.get("#cartur").click(); 
}    
clickPlaceOrder(){
    cy.get(".btn.btn-success").click({force:true});
}
}
export default Checkout