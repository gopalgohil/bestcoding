// JS Devloped by brendan eich
// What is Java Script?
// JS is the Programming Langugage for the Web.
// it is most popular programming lanugugage. it is easy to learn.

// 1 print in JS 
//console.log("this is me");
// alert("me");
//document.write("this is document write")
// console.warn("this is warning");
//console.log("hello", 10 + 5, "by");

// 2 JS Console API
//console.log("this is me");
//console.error("this is error");
//console.warn("this is warning");

// single line comment(//) 2. multiline comment(/*  */)

// 3 JS Variable

// it is container that store data value.
/*var num1=34;
var num2=32;

console.log(num1+num2);*/

/*
4.data type in JavaScript:
There are two type of data : 
1.primtive data:undefined,null,number,string,boolean,symbol


2.Reference data type:Array and objects
*/
/*var str1="This is string";
var str2="this is string 2";
console.log(str1+" "+str2);

var marks={
    ravi:34,
    gopal:95,
}
*//*
let a1={
    name:"gopal",
    section:1.
}
a1["friend"]="jaynit";
a1["name"]="vishal";
console.log(a1)*/

/*
console.log(marks)

var num=20;
var num3=20;
console.log(num==num3);

//  Array

/*var arr=[1,2,7,3,6,6];
console.log(arr);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[5]);*/

/*
Operator in javaScript

*/
/* 1.Arithmetic operator
var a=34;
var b=20;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
*/
// 2. Assigenment operatior
/*var a=10;
var b=10;
var c=10;
a+=20;
b*=20;
c-=20;
console.log(a)
console.log(b)
console.log(c)
*/

//  4.comparison

/*var a=20;
var b=20;
console.log(a==b)
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)
*/

// 5. logical opertor
//logical not ,or,and

/*
console.log(true||false)
console.log(true&&false)
console.log(!false)
*/
//  6. Function
/*function avg(a,b){
    return (a+b)/2;
}
c=avg(10,2);
console.log(c)*/
/*function mul(a,b){
    c=a*b;
    return c;
}
c1=mul(12,12);
console.log(c1)*/

// 7.conditional statement in JS
/*
var age=8;
if(age>18){
    console.log("you are not kid")
}
else{
    console.log("you are kid")
}*/

/*var age=30;
if(age<20){
    console.log("you are young");
}
else if(age>20){
    console.log("you are old");
}*/

/*
let a=prompt("what is your age");
console.log(typeof a)*/
// var arr=[1,2,3,4,6,78]
//for loop
/*console.log(arr)
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}*/
//for each
/*arr.forEach(function(element){
    console.log(element)
})*/
for(let i=1;i<11;i+2){
    console.log(i)
}
/*
let sum=0;
let n=prompt("Enter you age");
for(let i=0;i<n;i++){
    sum+=i;
    console.log(sum)
}
*/
/*
let obj={
    harry:90,
    shubh:45,
    ritika:49,
}
for(let a in obj){
    console.log(a);
    console.log(obj[a]);
}*/
/*
let a=10;
let b=20;
function sum(a,b){
    return a+b;
}
console.log(sum (a,b))*/
/*
//for loop
let marks={
    jay:45,
    gopal:90,
    sharad:55,
}
for(let i=0;i<Object.keys(marks).length;i++){
    console.log(Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]])
}*/
//for in loop
/*
let marks={
    jay:45,
    gopal:90,
    sharad:55,
}
for(let key in marks){
    console.log(key+" "+marks[key])
}*/
// Template literal
/*
let boy1="gopal";
let boy2="jay";
let set=`${boy2} is a friend of ${boy1}`;
console.log(set)*/
/*
// concat method
let name1="gopal";
let name2="jay";
console.log(name1.concat(" of ",name2))*/
/*
let a="please give Rs 1000";
console.log(a.slice("please give Rs".length));
//     or
console.log(a.slice(15));*/

//while loop
/*let i=0;
while(i<arr.length){
    console.log(arr[i]);
    i++;
}*/
//do while
/*
let i=0;
do{
console.log(arr[i]);
i++;
}
while(i<arr.length);
*/
// break and continue
/*var arr=[1,2,3,4,5,6,7,8,9,10]
for(var i=0;i<10;i++){
    if(i==2){
        continue;

    }
    console.log(arr[i])
}
var arr=[1,2,3,4,5,6,7,8,9,10]
for(var i=0;i<10;i++){
    if(i==2){
        continue;

    }
    console.log(arr[i])
}*/


// array method
// let arr=["fan","camera",34,null,true];
// console.log(arr.length)
// arr.pop();
// arr.push("gopal")
// arr.shift()     first element delete thay
// arr.unshift(34)      array ma agd avi jay
// arr.toString()
// arr.sort()
// console.log(arr)
/*
accending order to store number 
let compare=function(a,b){
    return a-b;
}
let arr=[56,7,1,2,255,6,55,89];
let a=arr.sort(compare);
console.log(a);*/
// splice and slice
/*
let a=[12,45,67,89,79,45,44,23];
a.splice(3,2,101,102);  // 3 is postion to add number and 2 is number of element to remove
console.log(a);*/

// slice :orignal Array not modify and newArray create then change the slice
/*
let arr=[1,2,3,4,5];
let newArr=arr.slice(1)
console.log(newArr);*/
// Square of array element
/*
let arr=[1,2,3,4,5,6,7];
arr.forEach(function(e){
    console.log(e*e);
})*/
// for..of loop
/*
let num=[1,2,3,4];
for(let i of num){
    console.log(i);
}*/
// Map is used to create a new array(index,array are option part)
/*
let arr=[45,23,22];
let a=arr.map(function(value,index,array) {
    console.log(value,index,array);
    return value+1;
})
console.log(a);*/

// Array filter method
// it is used to a<10  10 thi nana jetla elemnt hse te print thai jase
/*
let arr=[12,34,56,67,88,8,7,6];
let a=arr.filter(function(a){
    return a<10;
})
console.log(a)*/
//function nī method to reduce method (1+2=3,3+3=6,6+5=11,11+2=13,13+1=14)
/*let arr=[1,2,3,5,2,1];
let fun=function(h1,h2){
    return h1+h2;
}
let newarr=arr.reduce(fun);
console.log(newarr)*/
// Array.form is used to create a array in object
/*
let name_1="gopal gohel";
let newNameAraay=Array.from(name_1);
console.log(newNameAraay);*/

// String method
//let string="hello gopal";
// console.log(string.length)
// console.log(string.indexOf("gopal"))
// console.log()
//console.log(string.slice(0,3))
//d=string.replace("hello","jay");
//console.log(d)
// date method
/*
let myDate=new Date();
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());
**/
/*
});*/
/*
let elem=document.getElementsByClassName("main")
console.log(elem);
elem[0].style.background="yellow";
let elem1=document.getElementById("first")
console.log(elem1);
elem[1].style.background="black";*/
/*
let btn=document.getElementById('btn')
console.log(btn)
let elmclass=document.getElementsByClassName('main')
elmclass[0].innerHTML
console.log(elmclass);
// elmclass[0].style.backgroundColor="yellow";
// elmclass[0].classList.add("gopal");//new clas add thay
elmclass[0].classList.add("text-sucseesor");
// elmclass[0].classList.remove("text-sucseesor");//class text-sucessor remove
*/
/*
let arr=[1,2,3,4,5];
let a=prompt("enter the number");
a=Number.parseInt(a);
arr.push(a);
console.log(arr);*/
/*
let arr=[1,2,3,4,5];
let a;
do{
    a=prompt("enter the nume :");
    a=Number.parseInt(a);
    arr.push(a);   
}while(a!=0);
console.log(arr);*/

/*let arr=[1,2,3,50,30,40];
arr.filter(function(x){
    return x%10==0;
})
console.log(arr)*/
 
//  array element convert square
/*
let arr=[1,2,3,4,5,6,7,8];
let n=arr.map(function(x){  
    return x*x;
})
console.log(n)*/
/*

obj={a:1,b:2,c:3};
console.table(obj)*/
/*
let num=prompt("Enter the number");
num=Number.parseInt(num);

if(num>4){
    location.href="https://google.com"
}*/
/*
// change background from user input
let color=prompt("Enter the color :");
document.body.style.backgroundColor=color;*/
/*let arr=[1,2,3,54];

for(let key of arr){
    console.log(key)
}*/
// matches,closest,contains
/*
let id1=document.getElementById("id1");
let s1=document.getElementById("s1");
console.log(id1);
console.log(id1.matches(".class"));//false
console.log(id1.matches('.box'));//true
console.log(s1.closest("#s1"));// potani id return tase
console.log(s1.closest(".box"));
console.log(id1.contains(s1))
*//*
let a=document.getElementsByTagName('nav')[0].firstElementChild.style.color="red";
document.getElementsByTagName('nav')[0].lastElementChild.style.color="blue";
Array.from(document.getElementsByTagName('li')).forEach((element) => {
    element.style.background="red";
});*/
// innerHTML  and outerHTML
/*
id1.innerHTML
'<b>this is a id 1</b> <span id="s1"></span>'
id1.innerHTML="hello i am gopal gohel"
'hello i am gopal gohel'
id1.outerHTML
'<div class="box" id="id1">hello i am gopal gohel</div>'
id1.outerHTML
'<div class="box" id="id1">hello i am gopal gohel</div>'
id1.outerHTML="<div>hey</div>"
'<div>hey</div>'*/
// console.log(document.body.textContent)

// hidden
/*id2.hidden=false
false*/
/*

    let img1=document.querySelector('#img-1');

    img1.addEventListener("click",function(){
        if(img1.src.match("front.png")){
            img1.src="g-pay.png"
        }
        else{
            img1.src="login.png"
        }

    })*/

for(let i=0;i<20;i++){
    console.log(i)
}
   
    
