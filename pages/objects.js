var browser = require('protractor').browser;
var element = require ('protractor').element;

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
    result(){
        return element(by.css("h2[class='ng-binding']"));
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
    
}

module.exports = new pageobject();