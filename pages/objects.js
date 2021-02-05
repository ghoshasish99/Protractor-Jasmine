var browser = require('protractor').browser;
var element = require ('protractor').element;
var expect = require('chai').expect;

class pageobject {
    get operand1(){
        return element(by.model("first"));
    }
    get operand2() {
        return element(by.model("second"));
    }
    performOperation(operation){
        element(by.model("operator")).click();
        element(by.css("[value='"+operation+"']")).click();
        
    }
    get go_btn(){
        return element(by.id("gobutton"));
    }
    
    openURL(URL) {
        browser.get(URL);
    }
    addOperation(val1,op,val2){
       this.operand1.sendKeys(val1);
       this.performOperation(op)
       this.operand2.sendKeys(val2);
       this.go_btn.click();
    }
    
    assertResult(output){
        browser.sleep(5000);
        expect (element(by.cssContainingText('.ng-binding',output))).to.exist;
    }
    
}

module.exports = new pageobject();