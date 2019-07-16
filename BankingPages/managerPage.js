
var managerPage = function(){

    var addCust = element(by.buttonText('Add Customer'));
    var fName = element(by.model('fName'));
    var lName = element(by.model('lName'));
    var pCode = element(by.model('postCd'));
    var addCustom = element(by.className('btn btn-default'));
    var openAccount = element(by.buttonText('Open Account'));
    var openAccSel; 
    var currency;
    var prc =  element(by.buttonText('Process'));
    var Customers = element(by.buttonText('Customers'));
    var searchCustomer = element(by.model('searchCustomer'));
    var deleteCustomer;
    var delCustomer = element(by.buttonText('Delete'));
    var deleCustomer;

    this.addCustomer = function(){
        addCust.click();
    }
    this.firstName = function(fN){
        fName.sendKeys(fN);
        return this;
    }
    this.lastName = function(lN){
        lName.sendKeys(lN);
        return this;
    }
    this.postalCode = function(pC){
        pCode.sendKeys(pC);
        return this;
    }
    this.addCustom = function(){
        addCustom.click();
    }
    this.acceptAlert = function(){
        browser.switchTo().alert().accept();
    }
    this.openAcc = function(){
        openAccount.click();
    }
    this.openAccSel = function(fN,lN){
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
    this.currency = function(curr){
        let  Currency = element(by.model('currency'));
        let Coptions = Currency.all(by.tagName('option'));
        Coptions.then(function(items){
            console.log("Dropdown Itemsize : " + items.length);
            for(let i=0; i<items.length;i++){
                items[i].getText().then(function(txt){
                    if(txt == curr){
                        items[i].click();
                      
                    }
                })
            }
         })
    }
    this.process = function(){
        prc.click();
    }

    this.deleteCustomer = function (fN){
        Customers.click();
        console.log(fN);
        searchCustomer.sendKeys(fN);
      }

    this.deleCustomer = function(){
        delCustomer.click();
    }
      
}
module.exports = new managerPage();


