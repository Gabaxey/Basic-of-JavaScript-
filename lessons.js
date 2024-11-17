//                             //  chapter two 02 using the HTML Script tag 

//  <script> // begin script tag 
// document.write('hellow world')
// alert(hello);
// console.log()


// </script> // end script tag
//                             //  04 using external JavaScript files 
// /*
// <script src="file name"></script>
// */

//                                         // 05 Using JavaScript Comment 
// /*
// Comment one line 
// Multiplr line comment 

// */
//                                         //  Declaring Variabile 
// /*var 
// let
// const*/
// var geek = "hello world ";
// let sihaam = ('its so beautifull');
// const x = 21;

//                                             // Understand Date type In JavaScript
// // Primitive date type 
// /* A. number 
//    B. String 
//    C. Boolean 
//    D. undefined
//    F. null 
//    E. Symbol */
// // A. Number
// let w = 39;
// let y =45.9
// let ani =a+w;
// console.log(ani);

// let c = 250; let d = 40.5; 
// let sum=x+y;
// console.log(x+"+"+y+"="+sum);

// let bigNum = 123422222222222222222222222222222222222n
// //  B. String 
// let str = 'sihaam'
// let dabci = 'waaa'
// let jaceyl = "dabci fiican"
// let wadar = str+dabci+jaceyl;
// console.log(wadar);
// //  c. Boolean 
// let a1 = true;
// let a2 = false; 
// console.log(a1+a2)
//  //D. undefined
//  let name2; 
// console.log(name2); // undefined 
// // E. Null
// let v=null;
// let z=NaN;
// console.log(v); 
//                             // Note: null is not the same as NULL or Null. 
// //  f. Symbol
// let sym = Symbol("Hello")
// console.log(typeof(sym));
// // non primitive date type 
// /*
// a) Object
// b) Arry
// */
// // Object 
// const car = {type:"fait" , model: "500" , color:"Bron"}
// console.log(car);

// const person = new Object();
// person.firstName = "muno"
// person.lastName = "xuseen"
// person.age = 50;
// person.eyeColor = "blue";

// //  Arry
// // let arrayName = [value1, value2, ...]

// let sample = new Array();
// let courses=new Array("HTML", "CSS","Javascript","React"); 
// console.log(courses); 
//                             //  end chapter Two
//  a =0

//   Chapter 03 Decision & Loops 
// Conditional Statement 
// if , else , else if & Switch 

// Syntax IF

// if (condition){
//    // code be executed IF condition is true 
// }
// // sntax else 
// if (condition){
//     // block code tobe excuted if the condotion is true
// }
// else{
//     //  block of code to be if condition is false 
// }
// //  Syntax else if 
// if (condition1){
//     // block of code to be excuted if condition is true 
// }
// else if (condition2){
//     //  block of code to be excuted if the condition1 is false and condition3 is true 

// }else{
//     //  block of code to be excuted if the condition1 is false and condition3 is false
// }
// switch(expresion){
//     case 1:
//         // excue idf exp is true 
//         break;
//         case 2: 
//         // ex2 if exp2 is true
//         break;
//         default:
//             // code to exuted if none of the cases match
// }
// //  04 Javascript Loops
// // 1. for loop
// // 2. for in loop 
// // 3. while loop 
// // 4. do while 

// // 1. for loop 
// // 
// for(let intialization; condation; update){
//     satement 
// }
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// //  2. for ... in loop

// for(let key in object){
//     console.log(key)
// }
// // 4.3 while loop
// // syntax 
// while(condition){
//     //  code to be excuted in each iteration 
// // 4.4 Do while 
// // syntax 
// do{
//     satement(s)
// }while(condition);

// // 4.6 infinite loop
// // syntax 
// while(condition){
//     satement()
// } 