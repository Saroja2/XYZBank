
var LoginPage = function(){
    var lgn = element(by.buttonText('Bank Manager Login'));
    var cstLgn = element(by.buttonText('Customer Login'));


    this.clickLgn = function(){
        lgn.click();
        return require('./managerPage.js');
    }
    this.clickCusLgn = function(){
        cstLgn.click();
        return require('./custSelPage.js');
    }

}
module.exports =  new LoginPage();

// function loginVerify(index){
//     element(by.buttonText('Customer Login')).click();
//     element(by.model('custId')).click();
//     element.all(by.className('ng-binding ng-scope')).then(function(items)
//     {
//         items[index].click();
//     });

//     element(by.className('btn btn-default')).click();
//     element.all(by.options('account for account in Accounts')).then(function(items){
//         items[index].click();
//     });
// } 