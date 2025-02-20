
// --------- simple messages-------------

let msg='Hi';
// alert(msg);
console.log(msg);


let nam="sarvagna";
console.log("hello ",nam);


// ------------------------- Prompts -------------------

// let conf=confirm('you must be above 18 years');
// let namee=prompt("enter your name")
// let age=prompt('How old are you?')

// if(age>=18)
// {
// console.log("Welcome ", namee," you are ",age ," years old");

// }
// else {
//     console.log("you must be 18 yrs old");
// }



// ------------  operators      -.--.--.----...---...-----.....----..


console.log(2 ** 4);//16
console.log(2*4); // 8

let str= "hi"+" eclat";
console.log(str); // hi eclat




let x='2',y='3';
console.log(x+y); // 23
console.log( +x  +  +y); // 5


console.log('2' > 1) // true 
console.log('01' == 1) // true





//-------------------------------- loops


let i=0;
while(i<3)console.log(i++); // 0 1 2


for(let i=0;i<3;i++)console.log(i); //0 1 2


// ------------- functions, arrow functions

function sayhi()
{
    console.log('hi');
}

let func=sayhi;
func();
sayhi();


// function askk(ques,yes,no)
// {
//     if(confirm(ques) ) yes();
//         else no();
// }
// function agre()
// {
//     console.log("you agreed");
// }
// function didn()
// {
//     console.log("you didn't");
// }


// askk("DO YOU AGREE",agre,didn);



let sum= (a,b)=> a+b;
console.log(sum(1,2));

// --------------------------            OBJECTS              -------------------------------------

let user = new Object();

user={
name: "Sarvagna",
age: 20,
surname: "Khatri"
};

console.log(user.name + user.surname);



let salary={
savo: 100,
xd: 120,
cd: 150,
// fv:"sav"
};
let tot_salary=0
for(i in salary)tot_salary+=salary[i];
console.log(tot_salary); // 370


let userr = { name: 'John' };
let admin = userr;
admin.name = 'Pete'; // changed by the "admin" reference
console.log(userr.name); // Pete




// ---------------------------------     arrays              -----------------------------

let fruits=["apple","banana",'orange'];

console.log(fruits[2]);
console.log(fruits.length);

fruits.push("chickoo");

console.log(fruits.shift()); // apple
console.log(fruits.pop()); //chickoo
console.log(fruits);  // banana,orange

console.log(fruits.includes('banana')); //true



let arr=["abc",'def','ghi'];

delete arr[1];
console.log(arr); // 'abc', , 'ghi' --> length is 3


arr.splice(0,2);
console.log(arr); // ghi

arr.push('afs','ffef'); // ghi,afs,ffef
console.log("arr ",arr);


let arr2=arr.slice(1,2);
console.log("arr2 ",arr2);   //afs






arr.forEach((i)=>{
    console.log(i) //ghi,afs,ffef   
})

const items = [12, 24, 36];
const copy = [];

items.forEach((item)=> {
    copy.push(item);
});

console.log(copy);


let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 4, name: "John"}
  ];
  
  
  console.log(users.findIndex(user => user.name == 'John')); // 0
  
  console.log(users.findLastIndex(user => user.name == 'John'));//3

  let zx=1&2;
  console.log(zx);