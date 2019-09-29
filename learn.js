@@ -0,0 +1,65 @@
//varible
const a = 221;
const s = "Danny";
//let b = a - 5;
const b = true;
const f = 55.1;
//array
const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
//object
const dnInfo = {
  name:"Danny",
  age:22,
  gender:"Male",
  favFoods:[{name:"Pizza", fatty:true}, {name:"Pizza", fatty:true}]
};
console.log(s, a, f);
console.log(daysOfWeek[2]);

console.log(dnInfo);

dnInfo.gender = "Female"

console.log(dnInfo.gender);
console.log(dnInfo.favFoods[0].name);
//function

function sayHello(name, age){
  return(`Hello ${name} your age ${age} years old`);
};

const greetDanny = sayHello("Danny", 22);

console.log(greetDanny);

const calculator = {
  plus:function (a, b) {
    return a+b;
  },
  minus:function (a, b) {
    return a-b;
  },
  multi:function (a, b) {
    return a*b;
  },
  div:function (a, b) {
    return a/b
  },
  squ:function (a, b) {
    return a**b
  }
}
const plus = calculator.plus(5, 5);
const minus = calculator.minus(10,2);
const multi = calculator.multi(10,2);
const div = calculator.div(10, 2);
const squ = calculator.squ(10, 2);
console.log(plus, minus, multi, div, squ);

//DOM document object module
const title = document.getElementById("title");
console.log(title);
title.innerHTML = "Hi! From Js";
title.style.color = 'red';
console.dir(document);
document.title = 'Love';
