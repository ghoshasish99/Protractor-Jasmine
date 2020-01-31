var browser = require('protractor').browser;
var element = require ('protractor').element;

class Contacts {
    get NewButton(){
        return element(by.xpath("//button[text()='New']"));
    }
    get Name() {
        return element(by.xpath("//input[@name='contact-name']"));
    }
    get Email(){
        return element(by.xpath("//input[@name='contact-email']"));
    }
    get Mobile(){
        return element(by.xpath("//input[@name='contact-phone-mobile']"));
    }
    get WorkPhone(){
        return element(by.xpath("//input[@name='contact-phone-work']"));
    }
    get CreateButton(){
        return element(by.xpath("//button[text()='Create']"));
    }
    get UpdateButton(){
        return element(by.xpath("//button[text()='Update']"));
    }
    get DeleteButton(){
        return element(by.xpath("//button[text()='Delete']"));
    }
    name(name){
        return name;
    }
    set setname(name){
        this.name = name;
    }
    get ContactToBeOperatedOn(){
        return element(by.xpath(`//li[contains(text(),'${this.name}')]`));
    }
    openURL(URL) {
        browser.get(URL);
    }
    createNewContact(name,email,mobile,workphone){
       this.NewButton.click();
       this.Name.sendKeys(name);
       this.Email.sendKeys(email);
       this.Mobile.sendKeys(mobile);
       this.WorkPhone.sendKeys(workphone);
       this.CreateButton.click();
    }
    updateContact(originalname,name,email,mobile,workphone){
        this.setname = originalname;
        this.ContactToBeOperatedOn.click();
        this.Name.clear();
        this.Name.sendKeys(name);
        this.Email.clear();
        this.Email.sendKeys(email);
        this.Mobile.clear();
        this.Mobile.sendKeys(mobile);
        this.WorkPhone.clear();
        this.WorkPhone.sendKeys(workphone);
        this.UpdateButton.click();
     }
     updateContact(originalname,name,email,mobile,workphone){
        this.setname = originalname;
        this.ContactToBeOperatedOn.click();
        this.Name.clear();
        this.Name.sendKeys(name);
        this.Email.clear();
        this.Email.sendKeys(email);
        this.Mobile.clear();
        this.Mobile.sendKeys(mobile);
        this.WorkPhone.clear();
        this.WorkPhone.sendKeys(workphone);
        this.UpdateButton.click();
     }
     deleteContact(name){
        this.setname = name;
        this.ContactToBeOperatedOn.click();
        this.DeleteButton.click();
     }
}

module.exports = new Contacts();