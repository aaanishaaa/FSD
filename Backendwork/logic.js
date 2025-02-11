function sum(num1,num2){
    return num1+num2;
}

const multiplication=(num1,num2)=>{
    return num1*num2;
}
const divide=(num1,num2)=>{
    return num1/num2;
}
function subtract(num1,num2){
    return num1-num2;
}
const obj={
    sum:sum,
    multiplication:multiplication,
    subtract:subtract,
    divide:divide,
}
module.exports=obj;