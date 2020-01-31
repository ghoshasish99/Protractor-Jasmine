var Contacts = require ('../pages/Contacts');
var assert = require('chai').assert;
var fs = require ('fs');
var jsonbody = fs.readFileSync('./testdata/contacts.json');
var inputs = JSON.parse(jsonbody);

describe('Contacts Operation',()=>{
    it('Should Create a New Contact',()=>{
       Contacts.openURL(inputs.url);
       Contacts.createNewContact(inputs.create.name,inputs.create.email,inputs.create.mobile,inputs.create.workphone);
       Contacts.setname = inputs.create.name;
       assert(Contacts.ContactToBeOperatedOn.isElementPresent)
    })
    it('Should Update a Contact',()=>{
        Contacts.openURL(inputs.url);
        Contacts.updateContact(inputs.create.name,inputs.update.name,inputs.update.email,inputs.update.mobile,inputs.update.workphone);
        Contacts.setname = inputs.update.name;
        assert(Contacts.ContactToBeOperatedOn.isElementPresent);
    })
  
     it('Should Delete a Contact',()=>{
        Contacts.openURL(inputs.url);
        Contacts.deleteContact(inputs.create.name);
    })  
})