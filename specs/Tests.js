var mathsOps = require ('../pages/objects');
var fs = require ('fs');
var jsonbody = fs.readFileSync('./testdata/operations.json');
var inputs = JSON.parse(jsonbody);


describe('Mathematical Operations',()=>{

    it('Should Perform Addition',()=>{ 
       mathsOps.openURL(inputs.url);
       mathsOps.addOperation(inputs.add.op1,inputs.add.name,inputs.add.op2);
       mathsOps.assertResult(inputs.add.result);
    })
    it('Should Perform Subtraction',()=>{ 
        mathsOps.openURL(inputs.url);
        mathsOps.addOperation(inputs.sub.op1,inputs.sub.name,inputs.sub.op2);
        mathsOps.assertResult(inputs.sub.result);
     })
     it('Should Perform Multiplication',()=>{ 
        mathsOps.openURL(inputs.url);
        mathsOps.addOperation(inputs.mult.op1,inputs.mult.name,inputs.mult.op2);
        mathsOps.assertResult(inputs.mult.result);
     })
     
})