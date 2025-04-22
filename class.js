//this development reduced the complexity of applicatons and increased mainatainability by a huge margin.
// class Clasname{
//     constructor(prop1 ,prop2){
//         this.prop1=prop1;
//         this.prop2=prop2;
//     }
// }
// let obj1=new Clasname("arg1","arg2");
// console.log(obj1.prop1);
// console.log(obj1.prop2);

//  'this' keyword refers to the object it belongs to, so it is the first property of the instance classname.

// class Dog{
//     constructor(dogname,weight,color,breed){
//         this.dogname=dogname;
//         this.weight=weight;
//         this.color=color;
//         this.breed=breed;
//     }
// }
// let dog= new Dog("german shepherd",2.4,"brown","chihuaha");
// console.log(dog.dogname ,"is a ",dog.breed,"and weighs",dog.weight,"kg");

//clases
// first letter should be capital in class name

// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
// }
// let p=new Person("John","Deere");
// console.log( "hi" ,p.firstname,p.lastname);

// if only one parameter is passed then the trailing argument can be fetched by making them to be default argument

// class Person{
//     constructor(firstname,lastname="deere"){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
// }
// let p=new Person("John");
// console.log( "hi" ,p.firstname,p.lastname);







//Methods


// functions on a class are called the methods and when defining these methods we dont use the functions keyword.
// we start directly with the method name and the parameters inside the parenthesis

// class Person{
//         constructor(firstname,lastname="deere"){
//             this.firstname=firstname;
//             this.lastname=lastname;
//         }
//         greet(){
//             console.log("hi there ! i 'm ",this.firstname);
//         }
//     }

//     let p=new Person("makie","van putten");
//     p.greet();



// class Person{
//         constructor(firstname,lastname="deere"){
//             this.firstname=firstname;
//             this.lastname=lastname;
//         }
//         greet(){
//             console.log("hi, there");

//         }
//         compliment(name,object){
//             return"that a wonderful"+object+","+name;
//         }
//     }
//       let p=new Person("makie","van putten");
//     let compliment = p.compliment("harry","hat");
//     console.log(compliment);



//Properties

//properties ,sometimes also called fields,hold the data of the class.

// class Person{
//     #firstname;
//     #lastname;
//     constructor(firstname,lastname){
//    if(firstname.startsWith("M")){
//     this.#firstname=firstname;
//     this.#lastname=lastname;
//    }
//    else{
//     this.#lastname=lastname;
//    }
//     }
// }
// let p= new Person("maria","saga");
// console.log(p.firstname);

// class Person{
//     #firstname;
//     #lastname;
//     constructor(firstname,lastname){
   
//     this.#firstname=firstname;
//     this.#lastname=lastname;
//     }
//     get firstname(){
//         return this.#firstname;

//     }
//     set firstname(firstname){
//         this.#firstname=firstname;
       
//     }
//     get lastname(){
//         return this.#lastname;
//     }
//     set lastname(lastname){
//         this.#lastname=lastname;
//     }
// }
// let p=new Person("Maria","saga");
// console.log(p.firstname);
// console.log(p.firstname="rishabh");





