
var data = require(process.cwd() + '/utility/data.json');
var loginPage = require(process.cwd() + '/BankingPages/loginPage.js');



describe('bankingEnd2End',function(){

    it('bankManagerLogin' , function(){

        console.log(data.url);
        browser.get(data.url);
        browser.sleep(data.sleep.a);
    })


    it('bankManagerLogin' , function(){

        console.log(data.url);
        browser.get(data.url);
        let managerPage = loginPage.clickLgn();
        browser.sleep(data.sleep.a);
    })

    it('addCustomer', function(){
        console.log(data.url);
        browser.get(data.url);
        let managerPage = loginPage.clickLgn();
        browser.sleep(data.sleep.a);                                                                                                            
        managerPage.addCustomer();
        managerPage.firstName(data.cusDe.fN);
        managerPage.lastName(data.cusDe.lN);
        managerPage.postalCode(data.cusDe.pC);
        managerPage.addCustom();
        browser.sleep(data.sleep.a);
        managerPage.acceptAlert();
        browser.sleep(data.sleep.a);
    })

    it('openAccountDollar', function(){

        console.log(data.url);
        browser.get(data.url);
        let managerPage = loginPage.clickLgn();
        browser.sleep(data.sleep.a);                                                                                                            
        managerPage.addCustomer();
        managerPage.firstName(data.cusDe.fN);
        managerPage.lastName(data.cusDe.lN);
        managerPage.postalCode(data.cusDe.pC);
        managerPage.addCustom();
        browser.sleep(data.sleep.a);
        managerPage.acceptAlert();
        managerPage.openAcc();
        managerPage.openAccSel(data.cusDe.fN, data.cusDe.lN);
        managerPage.currency(data.currency.a);
        managerPage.process();
        browser.sleep(data.sleep.a);
        managerPage.acceptAlert();
        browser.sleep(data.sleep.a);

    })

    it('openAccountPound', function(){

        console.log(data.url);
        browser.get(data.url);
        let managerPage = loginPage.clickLgn();
        browser.sleep(data.sleep.a);                                                                                                            
        managerPage.addCustomer();
        managerPage.firstName(data.cusDe.fN);
        managerPage.lastName(data.cusDe.lN);
        managerPage.postalCode(data.cusDe.pC);
        managerPage.addCustom();
        browser.sleep(data.sleep.a);
        managerPage.acceptAlert();
        managerPage.openAcc();
        managerPage.openAccSel(data.cusDe.fN, data.cusDe.lN);
        managerPage.currency(data.currency.b);
        managerPage.process();
        browser.sleep(data.sleep.a);
        managerPage.acceptAlert();
        browser.sleep(data.sleep.a);

    })
       
    it('openAccountRupee', function(){

        console.log(data.url);
        browser.get(data.url);
        let managerPage = loginPage.clickLgn();
        browser.sleep(data.sleep.a);                                                                                                            
        managerPage.addCustomer();
        managerPage.firstName(data.cusDe.fN);
        managerPage.lastName(data.cusDe.lN);
        managerPage.postalCode(data.cusDe.pC);
        managerPage.addCustom();
        browser.sleep(data.sleep.a);
        managerPage.acceptAlert();
        managerPage.openAcc();
        managerPage.openAccSel(data.cusDe.fN, data.cusDe.lN);
        managerPage.currency(data.currency.c);
        managerPage.process();
        browser.sleep(data.sleep.a);
        managerPage.acceptAlert();
        browser.sleep(data.sleep.a);

    })


    it('deleteCustomer', function(){
        console.log(data.url);
        browser.get(data.url);
        let managerPage = loginPage.clickLgn();
        browser.sleep(data.sleep.a);                                                                                                            
        managerPage.addCustomer();
        managerPage.firstName(data.cusDe.fN);
        managerPage.lastName(data.cusDe.lN);
        managerPage.postalCode(data.cusDe.pC);
        managerPage.addCustom();
        browser.sleep(data.sleep.a);
        managerPage.acceptAlert();
        managerPage.deleteCustomer(data.cusDe.fN);
        browser.sleep(data.sleep.a);
        managerPage.deleCustomer();
        browser.sleep(data.sleep.a);
    })    
        
    it('customerLogin', function(){
        console.log(data.url);
        browser.get(data.url);
        let custSelPage = loginPage.clickCusLgn();
        browser.sleep(data.sleep.a);
        custSelPage.customLogin(data.custIndex.b);
        browser.sleep(data.sleep.a);
    }) 
        
    it('verifyCurrencyType', function(){
        console.log(data.url);
        browser.get(data.url);
        let custSelPage = loginPage.clickCusLgn();
        browser.sleep(data.sleep.a);
        custSelPage.customLogin(data.custIndex.b);
        browser.sleep(data.sleep.a);
    }) 

    it('initialTransaction', function(){
        console.log(data.url);
        browser.get(data.url);
        let custSelPage = loginPage.clickCusLgn();
        browser.sleep(data.sleep.a);
        custSelPage.customLogin(data.custIndex.b);
        browser.sleep(data.sleep.a);
        custSelPage.transaction();
        browser.sleep(data.sleep.a);
    })

    it('depositMoney', function(){
        console.log(data.url);
        browser.get(data.url);
        let custSelPage = loginPage.clickCusLgn();
        browser.sleep(data.sleep.a);
        custSelPage.customLogin(data.custIndex.b);
        browser.sleep(data.sleep.a);
        custSelPage.accountSelection(data.accSel.c,data.amount.a);
        browser.sleep(data.sleep.a);
    })

    it('transactionAfterDeposit', function(){
        console.log(data.url);
        browser.get(data.url);
        let custSelPage = loginPage.clickCusLgn();
        browser.sleep(data.sleep.a);
        custSelPage.customLogin(data.custIndex.b);
        browser.sleep(data.sleep.a);
        custSelPage.accountSelection(data.accSel.c,data.amount.a);
        browser.sleep(data.sleep.a);
        let accountPage = custSelPage.transaction();
        browser.sleep(data.sleep.a);
        accountPage.resetTransaction();
    })

    it('withDrawError', function(){
        console.log(data.url);
        browser.get(data.url);
        let custSelPage = loginPage.clickCusLgn();
        browser.sleep(data.sleep.a);
        custSelPage.customLogin(data.custIndex.b);
        browser.sleep(data.sleep.a);
        custSelPage.accountSelection(data.accSel.c,data.amount.a);
        browser.sleep(data.sleep.a);
        custSelPage.withDrawal(data.amount.c);
        browser.sleep(data.sleep.a);
    })

    it('withDrawSuccess', function(){
        console.log(data.url);
        browser.get(data.url);
        let custSelPage = loginPage.clickCusLgn();
        browser.sleep(data.sleep.a);
        custSelPage.customLogin(data.custIndex.b);
        browser.sleep(data.sleep.a);
        custSelPage.accountSelection(data.accSel.c,data.amount.a);
        browser.sleep(data.sleep.a);
        custSelPage.withDrawal(data.amount.b);
        browser.sleep(data.sleep.a);
    })

    it('transactionAfterWithdraw', function(){
        console.log(data.url);
        browser.get(data.url);
        let custSelPage = loginPage.clickCusLgn();
        browser.sleep(data.sleep.a);
        custSelPage.customLogin(data.custIndex.b);
        browser.sleep(data.sleep.a);
        custSelPage.accountSelection(data.accSel.c,data.amount.a);
        browser.sleep(data.sleep.a);
        custSelPage.withDrawal(data.amount.b);
        browser.sleep(data.sleep.a);
        custSelPage.transaction();
        browser.sleep(data.sleep.a);
    })

    it('transactionReset', function(){
        console.log(data.url);
        browser.get(data.url);
        let custSelPage = loginPage.clickCusLgn();
        browser.sleep(data.sleep.a);
        custSelPage.customLogin(data.custIndex.b);
        browser.sleep(data.sleep.a);
        custSelPage.accountSelection(data.accSel.c,data.amount.a);
        browser.sleep(data.sleep.a);
        let accountPage = custSelPage.transaction();
        browser.sleep(data.sleep.a);
        accountPage.resetTransaction();
        browser.sleep(data.sleep.a);
        accountPage.homeButton();
    })    

    it('appLogout', function(){
        console.log(data.url);
        browser.get(data.url);
        let custSelPage = loginPage.clickCusLgn();
        browser.sleep(data.sleep.a);
        custSelPage.customLogin(data.custIndex.b);
        browser.sleep(data.sleep.a);
        custSelPage.accountSelection(data.accSel.c,data.amount.a);
        browser.sleep(data.sleep.a);
        let accountPage = custSelPage.transaction();
        browser.sleep(data.sleep.a);
        accountPage.resetTransaction();
        browser.sleep(data.sleep.a);
        accountPage.logoutButton();
    })  

})