//import { browser, by, element } from "protractor";
//import { isMainThread } from "worker_threads";
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
    //new winston.transports.File({ filename: 'error.log', level: 'error' }),
    //  new winston.transports.File({ filename: './Reports/winstonBasicLog.log' })
    ]
  });
  function addCustomer(fN, lN, pC){
    element(by.buttonText('Add Customer')).click();
    element(by.model('fName')).sendKeys(fN);
    element(by.model('lName')).sendKeys(lN);
    element(by.model('postCd')).sendKeys(pC);
    element(by.className('btn btn-default')).click();
  }

  function customerSelection(fN,lN){
    let name = (fN+' '+lN);
    let Customers = element(by.model("custId"));
    let options = Customers.all(by.tagName('option'));
    options.then(function(items){    
        console.log("Dropdown Itemsize : " + items.length);
        for(let i=0; i < items.length; i++){
            items[i].getText().then(function(txt){
                console.log(txt);
                if(txt == name){
                    console.log("Inside If " + txt)
                    items[i].click();
                }
            })
        }
    }) 
  }
  function currencySelection(curr){
    let  Currency = element(by.model('currency'));
    let Coptions = Currency.all(by.tagName('option'));
    Coptions.then(function(items){
      console.log("Dropdown Itemsize : " + items.length);
        for(let i=0; i<items.length;i++){
            items[i].getText().then(function(txt){
                if(txt ==curr){
                    items[i].click();
                    
                }
            })
        }
    })
  }
  function deleteCustomer(fN){
    element(by.buttonText('Customers')).click();
    console.log(fN);
    element(by.model('searchCustomer')).sendKeys(fN);
  }
  
describe('e2etest', function(){

    beforeEach(function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        browser.manage().window().maximize();
        // logger.add(new winston.transports.Console({
        //     format: winston.format.simple()
        //   }));
    })
    it('loginPage', function(){
        //browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
       // browser.manage().window().maximize();
   

    //'bankManagerLogin'
        element(by.buttonText('Bank Manager Login')).click();
        //page2
        //Add Customer Page
        addCustomer(data.cusDe.fN,data.cusDe.lN,data.cusDe.pC);
        // element(by.buttonText('Add Customer')).click();
        // element(by.model('fName')).sendKeys('Saro');
        // element(by.model('lName')).sendKeys('Pottu');
        // element(by.model('postCd')).sendKeys('30339');
        // element(by.className('btn btn-default')).click();
        browser.sleep(3000);
        browser.switchTo().alert().accept();
        browser.sleep(3000);
        //select Customer using Open Account
        element(by.buttonText('Open Account')).click();
        //logger.info('Open Button Clicked');
        // let Customers = element(by.model("custId"));
        // let options = Customers.all(by.tagName('option'));
        // options.then(function(items){    
        //     console.log("Dropdown Itemsize : " + items.length);
        //     for(let i=0; i < items.length; i++){
        //         items[i].getText().then(function(txt){
        //             console.log(txt);
        //             if(txt == "Saro Pottu"){
        //                 console.log("Inside If " + txt)
        //                 items[i].click();
        //             }
        //         })
        //     }
        // }) 
        
        customerSelection(data.cusDe.fN,data.cusDe.lN);
        // element(by.model('currency')).$('[value="Dollar"]').click(); //$ = by.css
        // element(by.buttonText("Process")).click();
        // browser.sleep(2000);

    //   let  Currency = element(by.model('currency'));
    //   let Coptions = Currency.all(by.tagName('option'));
    //   Coptions.then(function(items){
    //     console.log("Dropdown Itemsize : " + items.length);
    //       for(let i=0; i<items.length;i++){
    //           items[i].getText().then(function(txt){
    //               if(txt ==data.currency.a){
    //                   items[i].click();
                      
    //               }
    //           })
    //       }
    //   })
        currencySelection(data.currency.a);
        element(by.buttonText("Process")).click();
        browser.sleep(2000);
        console.log("After process Click");
        //logger.info('After process Click');

        browser.sleep(3000);
        browser.switchTo().alert().accept();
        browser.sleep(3000);
        console.log("Alert closed");
        //logger.info('Alert closed');
        browser.sleep(2000);

        deleteCustomer(data.cusDe.fN);
        // element(by.buttonText('Customers')).click();
        // element(by.model('searchCustomer')).sendKeys();
        browser.sleep(2000);
        element(by.buttonText('Delete')).click();

    })











})