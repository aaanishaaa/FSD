// var a =12;
// console.log(a);
// if(a>10){
//     var b =23;
//     console.log("a inside condition:"+a);
// }
// console.log("b outside condition:"+b);

// let a =12;
// let b = "12";
// if(a===b){
//     console.log("welcome");
// }
// else{
//     console.log("hello")
// }

// let myname="anisha";
// let college = "ABESEC";
// let result= `Hi, my name is ${myname}`;
// console.log(result);

//OBJECTS IN js
// const student=[
// {
//     fname:"Anisha",
//     sname:"Rawat",
//     course:"Btech",
//     college:"ABESEC"
// },
// {
//     fname:"Nisha",
//     sname:"Singh",
//     course:"MCA",
//     college:"ABESEC"
// }
// ]
// console.log(student.college);

// let key = "fname";

// const {fname}=student;
// console.log(fname);
// student[key]="Rahul";
// console.log(student[1].college);

// function greeting(b){
//     console.log("hello",b)
// }

// let b="anisha";
// greeting(b);

// function sum(a,b,c=23){
//     return a+b+c;
// }
// let data = sum(12,20);
// console.log(data);

// function Ccomplier(){
//     return "ccompilier selected";
// }

// function javaComplier(){
//     return "java1compilier selected";
// }

// function selectLanguage(clbk){
//     console.log("you have :"+clbk());
// }

// selectLanguage(Ccomplier)

// function selectLanguage(lang) {
//   let data;
//   if(lang == "c") 
//     {
//     function Ccomplier() {
//       return "ccompilier selected";
//     }
//     data=Ccomplier();
//   }
//   if(lang == "java");
//   {
//     function javaComplier() {
//       return "java1compilier selected";
//     }
//     data=javaComplier();
//   }
//   return data;
// }
// let result=selectLanguage("java");
// console.log(result);

console.log("hello");
let parent=document.getElementsByClassName("parent");
console.log(parent);
parent[0].innerHTML="<h2>Data has changed</h2>"