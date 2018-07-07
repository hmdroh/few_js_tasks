// Using the JavaScript language, have the function 
// FirstFactorial(num) take the num parameter being
//  passed and return the factorial of it 
//  (e.g. if num = 4, return (4 * 3 * 2 * 1)).
//   For the test cases, the range will be between 1 and 18 and the input 
//   will always be an integer. 

function FirstFactorial(num) { 
    //first we set factorial to 1;
    var factorial = 1;
    //running a loop:
    for(var i = 1; i<=num; i++){
        //we multiply each number to factorial:
        factorial = factorial * i;
    }
    //setting num to return:
    num = factorial;
    return num; 
}
   
// keep this function call here 
console.log(FirstFactorial(8));


