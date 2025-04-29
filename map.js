// a map holds key value pair wherekey can of any data type;
//create map 1.
// const fruits=new Map([
//     ["apples",500],["banana",300],["oranges",200]
// ]);
// console.log(fruits);

//create Map 2.using set method
// const fruits=new Map();
// fruits.set("apples",500);
// fruits.set("banana",300);
// fruits.set("oranges",200);
// console.log(fruits);
// fruits.set("apples",200);
// fruits.get("apples");


// console.log(fruits.size)
//Map.delete
//Map.clear():delete all elements from map
//Map.has():checks membership-return boolean value

//Map.forEach
// const fruits=new Map();
// fruits.set("apples",500);
// fruits.set("banana",300);
// fruits.set("oranges",200);
// let text="";
// fruits.forEach(function(value,key){
//     text+=key +'='+value;
// })
// console.log(text);

// Map.entries()
// const fruits=new Map();
// fruits.set("apples",500);
// fruits.set("banana",300);
// fruits.set("oranges",200);
// let text=" ";
// for(const x of fruits.entries()){
//     text+=x;
// }console.log(text);

//Map.key()
//  const fruits=new Map();
// fruits.set("apples",500);
// fruits.set("banana",300);
// fruits.set("oranges",200);
// let text=" ";
// for(const x of fruits.keys()){
//     text+=x;
// }console.log(text);

//Map.values()
// const fruits=new Map();
// fruits.set("apples",500);
// fruits.set("banana",300);
// fruits.set("oranges",200);
// let text=" ";
// for(const x of fruits.values()){
//     text+=x;
// }console.log(text);


//addition of all values
// const fruits=new Map();
// fruits.set("apples",500);  // apples are string
// fruits.set("banana",300);
// fruits.set("oranges",200);
// let total=0;
// for(const x of fruits.values()){
//     total+=x;
// }console.log(total);


//OBJECTS AS KEYS
//create objj
// const apples={name:'Apples'};
// const banana={name:'Banana'};
// const oranges={name:'Oranges'};
// const fruits=new Map();
// fruits.set(apples,500);   //aapless is obj 
// fruits.set(banana,300);
// fruits.set(oranges,200);


//DESTRUCTURING:----order of property sdo not matter ;it do not chnge the original obj
//create objj
// const Person={
//     firstName:"john",lastName:"Doe",age:50
// };
// //DESTRUCTURING 
// let{firstName,lastName}=Person;
// console.log(firstName);

//usageby hanging oder 
// const Person={
//     firstName:"john",lastName:"Doe",age:50
// };
// //DESTRUCTURING 
// let{lastName,firstName}=Person;
// console.log(firstName);// extraction of keys happens despite the order of keys in line 98 is diffrent here




//ALIAS CREATIOON
//create objj
// const person={
//     firstName:"john",lastName:"Doe",age:50
// };
// let{lastName:Name}=person;
// console.log(Name);


// // create a string 

// let name="gurukultheschools";
// let[a1,a2,a3,a4,a5]=name;


// create an array

// const fruits=["banana","oranges","apples","mangoes"];

// // destructuring

// let[fruit1,fruit2]=fruits;

// destructuting of skipping values 

// let[fruit1,,,fruit2]=fruits;

// const fruits=["banannas","oranges","apples","mangoes"];
// let{[0]:fruit1,[1]:fruit2}=fruits;
// console.log(fruit);

//rest can be made through triple dots 

// const numbers=[10,20,30,40,50,60,70];
// const[a,b,...rest]=numbers;
// console.log(a,b,rest);

// Destructuring Maps

// const fruits=new Map([["apple",500],["banana",300],["oranges",200]]);

// // destructuring 

// let text=



// Swapping of two with destructuring 

// let firstname="john";
// let lastName="doe";
// [firstname,lastName]=[lastName,firstname];
// console.log(firstname,lastName);


// Exponentiation in js 

// let x=5;
// let z=x**2;
// console.log(z);

// using library

// let x=5;
// let z=Math.pow(x,2);
// console.log(z);


//exponentiation assignment 

// let x=5;
// x**=2;
// console.log(x);


//Array includes()

// const fruits=["banan","oranges","apple","mango"];

// console.log(fruits.includes("mango"));


// const fruits=["banan","oranges","apple","mango"];
// console.log(fruits.includes("banan",3));


// include method is case sensitive

//synatx
//array.includes(element,start)



// trailing commas 

// const arr=["one","two","three",];

// trailing commmas should have only one trailing comma not more than one 

// const arr=["one","two","three",,];
// console.log(arr.length);


// const sparseArray=[1,,,4,5,,];
// this has 6 elements in which three are zero 


// const person={
//     firstname:"john",
//     lastname:"davis",age:30,
// }
// console.log(person);


