 
 var custSelPage = function(){
    
    let custId = element(by.model('custId'));
    let login = element(by.className('btn btn-default'));
    let accSel = element.all(by.options('account for account in Accounts'));
    let transactions = element(by.buttonText('Transactions'));
    let deposit = element(by.buttonText('Deposit'));
    let amount = element(by.model('amount'));
    let clickToDeposit = element(by.className('btn btn-default'));
    let accountSelection; 
    let withDrawal;
    let withDraw = element(by.buttonText('Withdrawl'));
    let drawAmount = element(by.model('amount'));
    let draw = element(by.buttonText('Withdraw'));

    


    this.customLogin = function(index){
        custId.click();
        element.all(by.className('ng-binding ng-scope')).then(function(items)
        {
            items[index].click();
        })
            login.click();
    }             

    this.accountSelection = function (acSe, amt){
        accSel.then(function(items){

            items[acSe].click();
        })
        deposit.click();
        amount.sendKeys(amt);
        clickToDeposit.click();
    };
    
    this.transaction = function(){
        transactions.click(); 
        return require('./accountPage.js');
    }

    this.withDrawal = function(amnt){
        withDraw.click();
        browser.sleep(2000);
        drawAmount.sendKeys(amnt);
        draw.click();
    }
          
 }
 module.exports =  new custSelPage();