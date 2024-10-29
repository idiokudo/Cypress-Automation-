class Login {
    validateLogin(){
cy.url().should('contain', 'login');
    }
    validateLoginBtn(){
       cy.get("button[data-qa='login-button']").should('have.text', 'Login');
    }
enterEmail(email){
    cy.get("input[data-qa='login-email']").type(email);
}
enterPassword(password){
    cy.get("input[placeholder='Password']").type(password);
}
clickLogin(){
    cy.get("button[data-qa='login-button']").click();
}
}
export default Login