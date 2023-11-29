// Start coding here
let calculator = {
    add: (a,b)=>
        {
            let result = a+b
            return result;},

        
    subtract:(a,b)=>
        {
            let result = a-b
            return result;},
        

    multiply: (a,b)=>
        {
            let result = a*b
            return result;},
    

    divide: (a,b)=>
        {
            let result = a/b
            return result;},  

      };

    let addResult = calculator.add(10,20)
    console.log("Addition Result is "+ addResult);
    let divideResult = calculator.divide(3000,10)
    console.log("Division Result is " + divideResult);