// let varContainingFunction=function() 
// {
//     let varInFunction = "i'm in a function. ";
//     console.log("hi there !", varInFunction);
// };


// varContainingFunction();

// function sayHello(){
//     let you =prompt("whts ur name");
//     console.log("hello",you + "!");
// }
// sayHello()


// function tester(para1,para2){
//     return para1 +" " +para2;
// }
// const arg1 ="argumemt 1";
// const arg2="argument 2";
// tester(arg1,arg2);



// function addTwoNumbers(x,y)
// {
//     console.log(x+y);

// let you=parseInt(prompt(x+y));

// }
// addTwoNumbers()

// function addTwoNumbers(x,y){
//     console.log(x+y);
// }
//   addTwoNumbers(1,2,3,4) 

// ARROW FUNCTIONS ARE GREAT FOR SNEDING FUNCTIONS AROUND AS PARAMETERS ANS USING THE SHORTER NOTATIONS  =>
   //ARROW ,SPREAD FUNCTIONS , REST FUNCTIONS

    // let doingArrowStuff = x=>console.log(x);
    // doingArrowStuff("Great");

    // let addTwoNumbers=(x,y) => console.log(x+y);

    // const arr=["squirrel","alpaca","buddy"];
    // arr.forEach(e => console.log(e));
       
    // let spread =["so","much","fun"];
    // let message=["javaScript","is",...spread,"and", "very","powerful"];
    // console.log(message);
     
    // function addTwoNumbers(x,y){
    //         console.log(x+y);
    //      }
    // let arr=[5,9];
    // addTwoNumbers(...arr);
     
    // function addFourNumbers(x,y,z,a){
    //     console.log(x+y+z+a);
    // }
    // let arr=[5,9];
    // let arr2=[6,7];
    // addFourNumbers(...arr,...arr2);

    // function someFunction(param1,param2){
    //     console.log(param1,param2);
    // }
    // someFunction("hi","there!","how r u");
    // function someFunction(param1,...param2){
    //     console.log(param1,param2);
    // }
    // someFunction("hi","there!","how r u");

    // returning function values
    // function addTwoNumbers(x,y){
    //     console.log(x+y);
    //  }
    // let result=addTwoNumbers(4,5);
    // console.log(result);
    
    // function addTwoNumbers(x,y){
    //     console.log(x+y);
    //  }
    // let resultArr=[];
    // for(let i=0;i<10;i++)
    // {
    //     let result=addTwoNumbers(i,2*i);
    //     resultArr.push(result);
    // }
    // console.log(resultArr);

    //variable scope in function 
    // function testavailabity(x){
    //     console.log("availabilty here:",x);

    // }
    // testavailabity("hii");
    // console.log("not available here: ",x);
    

    // function testAvailability(){
    //     let y="local variable";
    //     console.log("availability here:",y);
    // }
    // testAvailability();
    // console.log("not available here:",y);
    
//     function testAvailability(){
//         let y="I will return";
//         console.log("available here:",y);
//         return y;
//     }
// let z=testAvailability();
// console.log("outside the function:",z);
// console.log("not available here:",y);

//let versus var:
// function doingstuff(){
//     if (true){
//         var x="local";
//     }
//     console.log(x);
// }
// doingstuff();

// function doingstuff(){
//     if (true){
//         console.log(x);
//         let x="local";
//         }
// }
// doingstuff();

// function doingstuff(){
//     if (true){
//         console.log(x);
//         var x="local";
//         }
// }
// doingstuff();

//constant scope

// function doingstuff(){
//     if (true){
//         console.log(x);
//         const x="local";
//         }
// }
// doingstuff();

//global variables are not bind in any scope life of global variable is till the end of the whole program

// let globalvar="acessible everywhere";
// console.log("outside function:",globalvar);

// function creatingnewscope(x){
//     console.log("access to global vars inside function ",globalvar);
// }
// creatingnewscope("param");
// console.log("still available:",globalvar);

// let x="global";
// function doingstuff(){
//     let x="local";
//     console.log(x);
// }
// doingstuff();
// console.log(x);

// let x="global";
// function doingstuff(){
//      x="local";
//     console.log(x);
// }
// doingstuff();
// console.log(x);

// let x="global";
//  function doingstuff(x){
//     console.log(x);
//  }
//  doingstuff("param");

// function confusereader(){
//     x="guess my scope...";
//     console.log("inside the function:",x);
// }
// confusereader();
// console.log("outside the function :",x);

// immediately invoked function expression 
// the immediately invoked function expression (iife)
// (function (){
//     console.log("IIFE");
// })();

// (function (x,y)
// {
//     console.log(x+y);
// })(2,3);


// arrow function as iife 
// (()=>{
//     console.log("run right away");
// })();

//recursive function 

// function getrecursive(nr){
//     console.log(nr);
//     if(nr>0){
//     getrecursive(--nr);
// }
// }
// getrecursive(3);



// function logrecursive(nr){
//     console.log("started function :",nr);
//     if(nr>0){
//         logrecursive(nr-1);
//     }
//     else{
//         console.log("done with recursion");
//     }
//     console.log("ended function :",nr);

// }
// logrecursive(3);








    
    