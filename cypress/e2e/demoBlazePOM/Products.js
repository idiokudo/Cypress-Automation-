class Products{
   
    selectSamsung(){
        cy.get("div[id='tbodyid'] div:nth-child(1) div:nth-child(1) a:nth-child(1) img:nth-child(1)").click();
    }
    addSamsungCart(){
        cy.get(".btn.btn-success.btn-lg").click();
    }
    clickHome(){
        cy.get("li[class='nav-item active'] a[class='nav-link']").click();
    }
    clickMonitor(){
        cy.get("body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(4)").click();
    }
    selectPc(){
        cy.get("img[src='imgs/apple_cinema.jpg']").click();
    }
    addPcCart(){
        cy.get(".btn.btn-success.btn-lg").click();
    }
    
}
export default Products