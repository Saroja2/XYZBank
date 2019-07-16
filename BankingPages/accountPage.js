

var accountPage = function(){

    let rst = element(by.buttonText('Reset'));
    let home = element(by.buttonText('Home'));
    let logout = element(by.buttonText('Logout'));
    
    this.resetTransaction = function(){
        rst.click();
    }
    this.homeButton = function(){
        home.click();
        browser.sleep(3000);
    }

    this.logoutButton = function(){
        logout.click();
        browser.sleep(3000);
    }

}

module.exports = new accountPage();