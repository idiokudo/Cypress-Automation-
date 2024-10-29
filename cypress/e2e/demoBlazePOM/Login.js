class Login{
    clickLogin(){
        cy.get("#login2").click();
        cy.wait(1000);
    }
    
    enterUsername(){
        cy.xpath("//input[@id='loginusername']").type("Godfrey Nyong");
    }
    enterPassword(){
        cy.xpath("//input[@id='loginpassword']").type("idiokudo");
    }
    clickLogin(){
        cy.xpath("//button[normalize-space()='Log in']").click();
    }
}
export default Login