//print in js

//console.log("Hello WORLD");
//document.write("this document.write");
//alert("this is alert");

//js console api

//console.warn("this is warning");
//console.error("this is error");
//console.assert((6-2)==4);
//console.log("hello",4+6);

//js variables
//variables --containers to store data variables

// var num1=34;
// var num2=56;
// console.log(num1*num2);
//var,let,const--
//var -> accessed within a func
//const -> cant be reassigned but can be redeclare
//let -> reassigned but not redeclare

//data types in js

//string
// var str1="This is str1";
// var str2="This is str2";

// //numbers
// var num1=9;
// var num2=8;

// //objects
// var marks={
//     ravi:34,
//     shubham:32
// }
// console.log(marks);

//boolean
// var a=true;
// var b=false;
// console.log(a,b);

// var und;
// // console.log(und);

//  var n=null;
// console.log(n);

/* There are two types of datatypes in js 
1. Primitive -> null,undefined,numbers,strings,boolean,symbol
2. Reference -> arrays,objects
*/

// var arr=[1,2,"abc",3,4];
// // console.log(arr[0]);
// // console.log(arr);

// //operators in javascript

// //arithmetic operators
// var v1=34;
// var v2=56;
// console.log("The value of a+b is ",v1+v2);
// console.log("The value of a-b is ",v1-v2);
// console.log("The value of a*b is ",v1*v2);
// console.log("The value of a/b is ",v1/v2);

//assignment operators
// var c=v2;
// //c-=2;
// //c+=2;
//c*=2;
//c-=2;
//console.log(c);

//comparison operators
// var x=3;
// var y=5;
// console.log(x==y);
// console.log(x>=y);
//likewise them

//logical operators
// console.log(true&&false);
// console.log(true|| false);
// console.log(!false);

//bitwise operators -> & | ~ ^
// let num1=6;
// let num2=3;
// console.log(num1& num2);
// console.log(num1|num2);
// console.log(~num2);
// console.log(num1^num2);

//functions in javascript

//works on dry principle -- do not repeat
// function avg(a,b){
//     return (a+b)/2; //or d=(a+b)/2; return d;
// }
// c1=avg(4,6);
// console.log(c1);
// console.log('3');  //string will be black
// console.log(3); //number will be blue

//conditional statements in javascript

// var age=34;
// if(age>81){
//     console.log("you are not a kid");
// }
// else if(age==34){
//     console.log("you are 34");
// }
// else {
//     console.log("you are a kid");
// }

//loops in javascript

//for loop
//var arr=[1,2,3,4,5,6,7];
// //console.log(arr);
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

//for each
// arr.forEach(function (element) {
//   console.log(element);
// });

//while loop
// let j = 0;
// // const a = 0;
// // a += 1; //not possible
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

//do-while loop
// let j=0;
// do{
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length);


//break and continue
// for(var i=0;i<arr.length;i++){
//     if(i==2)
//     //break;
//     //continue;
//     console.log(arr[i]);
// }


//javascript array methods

//let myarr=["Fan","Camera",34,null,true];
//  console.log(myarr.length);
//  //myarr.pop();
//  //myarr.push("harry");
//  //myarr.shift(); //remove irst element
//  //myarr.unshift();
//  const newlen=myarr.unshift("aa");
//  console.log(newlen);
// console.log(myarr.toString());
// console.log(myarr.sort());
// const splicee=['Jan','Feb'];
// splicee.splice(1,0,'March');
// console.log(splicee);   //overwrite element at 1 index and replaces 0 element


//string methods in javascript


// let str="aakrati";
// console.log(str.length);
// console.log(str.indexOf("aa")); //first occurence
// console.log(str.lastIndexOf("a"));  //last occurence
// console.log(str.slice(1,3));
// var d=str.replace("aa","akp");
// console.log(d);


//dates in javascript

// let myDate=new Date();
// console.log(myDate);
// console.log(myDate.getFullYear());
// console.log(myDate.getTime());
// console.log(myDate.getDay());


//DOM manipulation









//