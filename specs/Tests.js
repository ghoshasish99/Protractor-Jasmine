var mathsOps = require ('../pages/objects');
var expect = require('chai').expect;
var fs = require ('fs');
var jsonbody = fs.readFileSync('./testdata/operations.json');
var inputs = JSON.parse(jsonbody);

describe('Mathematical Operations',()=>{

    it('Should Perform Addition',()=>{ 
       mathsOps.openURL(inputs.url);
       mathsOps.addOperation(inputs.add.op1,inputs.add.name,inputs.add.op2);
       var result = mathsOps.result().getText();
       expect (result).to.equal(inputs.add.result);
    })
    // it('Should Update a Contact',()=>{
    //     Contacts.openURL(inputs.url);
    //     Contacts.updateContact(inputs.create.name,inputs.update.name,inputs.update.email,inputs.update.mobile,inputs.update.workphone);
    //     Contacts.setname = inputs.update.name;
    //     assert(Contacts.ContactToBeOperatedOn.isElementPresent);
    // })
  
    //  it('Should Delete a Contact',()=>{
    //     Contacts.openURL(inputs.url);
    //     Contacts.deleteContact(inputs.create.name);
   // })  
})