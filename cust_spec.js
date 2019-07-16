//import { browser } from "protractor";
//import {by, element} from "protractor";
var data = require('./utility/data.json');
let winston = require('winston');
// configuring log
const logger = winston.createLogger({
    //mentioning level of log
    level: 'info',
    //defining how it behaves json format
    format: winston.format.json(),
    transports: [
        // - Write to all logs with level `info` and below to `./Reports/winstonLog.log` 
    // - Write all logs error (and below) to `error.log`.
    //
   // new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: './Reports/winstonBasicLog.log' })
    ]
  });

  function loginVerify(index){
    element(by.buttonText('Customer Login')).click();
    element(by.model('custId')).click();
    element.all(by.className('ng-binding ng-scope')).then(function(items)
    {
        items[index].click();
    });

    element(by.className('btn btn-default')).click();
    element.all(by.options('account for account in Accounts')).then(function(items){
        items[index].click();
    });
}  
   function accountSelection(acSe, amt){
    element.all(by.options('account for account in Accounts')).then(function(items){
         items[acSe].click();
        })
        element(by.buttonText('Deposit')).click();
        element(by.model('amount')).sendKeys(amt);
        element(by.className('btn btn-default')).click();
};
    function withDrawal(amnt){
        element(by.buttonText('Withdrawl')).click();
        browser.sleep(2000);
        element(by.model('amount')).sendKeys(amnt);
        element(by.buttonText('Withdraw')).click();
    }

describe('LoginTestSuite',function(){

    beforeEach(function()
    {
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
         browser.manage().window().maximize();
     });

    xit('loginPage', function(){
       
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        if(expect(element(by.buttonText('Customer Login')).getText()).toEqual('Customer Login')){
            logger.info('First Testcase passed');
        }
        else
        {
            logger.info('Testcase failed');
        }
        if(expect(element(by.buttonText('Bank Manager Login')).getText()).toEqual('Bank Manager Login')){
            logger.info('First Testcase passed');
        }
        else {
            logger.info('First Testcase failed');
        }

        //element(by.buttonText('Go!')).click();
       // expect(element(by.binding('latest')).getText()).toBe('8');
    });

    it('verifyCurrencyType', function(){
       loginVerify(data.custIndex.b);
    });  

    xit('initialTransaction',function(){
        loginVerify(data.custIndex.b);
        element(by.buttonText('Transactions')).click();
        browser.sleep(3000);
    })

    xit('depositMoney', function(){
        loginVerify(data.custIndex.b);
        accountSelection(data.accSel.c, data.amount.a);
            browser.sleep(4000);
        
    })

   xit('transactionAfterDeposit',function(){
        loginVerify(data.custIndex.b);
        accountSelection(data.amount.a);
        browser.sleep(2000);
        element(by.buttonText('Transactions')).click();
        browser.sleep(4000);
    })

    xit('withdrawError',function(){
        loginVerify(data.custIndex.b);
        accountSelection(data.amount.a);
        withDrawal(data.amount.c);
        browser.sleep(2000);
        browser.sleep(4000);
    })

    xit('withdrawSuccess',function(){
        loginVerify(data.custIndex.b);
        accountSelection(data.amount.a);
        browser.sleep(2000);
        withDrawal(data.amount.b);
        browser.sleep(4000);
    })
    xit('transactionAfterWithdraw',function(){
        loginVerify(data.custIndex.b);
        browser.sleep(4000);
        accountSelection(data.amount.a);
        browser.sleep(2000);
        withDrawal(data.amount.b);
        browser.sleep(4000);
        element(by.buttonText('Transactions')).click();
        browser.sleep(4000);
    })
    xit('transactionReset', function(){
        loginVerify(data.custIndex.b);
        browser.sleep(4000);
        accountSelection(data.amount.a);
        browser.sleep(2000);
        withDrawal(data.amount.b);
        element(by.buttonText('Transactions')).click();
        browser.sleep(4000);
        element(by.buttonText('Reset')).click();
        browser.sleep(4000);
    })
});