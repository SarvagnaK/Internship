// console.log("hi");
// console.log("IINIC");
// ------------------  MAP  -------------

let mp=new Map();
mp.set(1,'a');
mp.set(2,'b');
mp.set(4,"fefe")
console.log(mp.get(1)); // a
console.log(mp.get(3)); // undefined

console.log(mp.size) // 2


for(let i of mp.keys())
{
    console.log(i); // 1 2 4
}
for(let i of mp.values())
{
    console.log(i); // a b fefe
}

mp.forEach((val,key)=>{
    
    console.log(key+' '+val)
})// 1 a, 2 b, 4 fefe



let visitcnt= new Map();

function countuser(user)
{
    let cnt=visitcnt.get(user) || 0;
    visitcnt.set(user,cnt+1);
}




let myMap = new Map();

// Adding [key, value] pair to the map
myMap.set(0, 'geeksforgeeks');
myMap.set(1, 'is an online portal');
myMap.set(2, 'for geeks');

let iterator=myMap.entries();
// console.log(it);
iterator.forEach((iti) => {
    console.log(iti[0]); // 0,1,2
    
});

// ------------------------------        SET           ---------------
let st= new Set(['orange','apple','banana']);
st.add('orange') // duplicates will not be added again

console.log(st.size);// 3
for(let  i of st)
{
    console.log(i); // or.. app.. ban..
}

st.forEach( (val) =>{
    console.log(val); // or.. app.. ban..
})


// ---------------------- DATE TIME -------------------


let dt=new Date();
console.log(dt) 
console.log(dt.getDate()); // date
console.log(dt.getHours()); //current hours
console.log(dt.getMonth()); // current month

let dte=new Date(2025,0,33);
console.log(dte); // 2nd feb 2025


let start = new Date(); // start measuring time

// loop
for (let i = 0; i < 100000; i++) {

}

let end = new Date(); // end measuring time

console.log( `The loop took ${end - start} ms` );







// -----------------   rest parameters --------------------

function summation(...args)
{
    let sum=0;
    for(let i of args)sum+=i;
    return sum;
}

console.log(summation(1,2,3));//6
console.log(summation(1,2,3,4,5))//15

let arr1=[1,0,-2,9];
let arr2=[3,4,-5,0];
console.log(Math.max(...arr1,...arr2));  //9


let str="hello";
console.log(...str);//h e l l o
console.log(...[str]); // hello

// ------------------ IIFE ----------------
(
    function ()
    {
        console.log("This is iife - immediately invoked function expression")
    }
)();

//      -------------------- new Function ---------------------
let sum = new Function('a', 'b', 'return a + b');

console.log( sum(1, 2) ); // 3
let sayhi=new Function('console.log("hiii")');
sayhi();








// ---------------------- setTimeOut       and        setInterval-------------

function settime() {
    console.log('set timeout used');
}

setTimeout(settime,1000); // after 1s set timeout used is printed




let timeid=setInterval(() => {
    console.log("set interval used");
}, 1000);

setTimeout(() => {
    clearInterval(timeid); 
    console.log("clear interval called");
    
}, 4000); // every 1sec sayhii is printed until 4s