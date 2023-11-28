//let/const variablename = new Promise((resolve,reject)=>{})
/*const a = parseInt(prompt("Enter a number"))
const promise1 = new Promise((resolve,reject)=>{
  if(a%2===0){
      resolve("Even Number")
  }
  else{
         reject("Odd Number")
  }
})
//console.log(promise1);
promise1.then((data)=>console.log(data)).catch((error)=>console.log(error))
*/
//!session task voting
/*const b = parseInt(prompt("Enter a age"))
const promise2 = new Promise((resolve,reject)=>{
  if(b>=18){
      resolve("Eligible to vote")
  }
  else{
         reject("Not Eligible to vote")
  }
})
promise2.then((data)=>console.log(data)).catch((error)=>console.log(error))
*/
//! promise in functions
//=> It will return the promise
//if there are both resolve and rejects state for the same function it executes the first state.
/*function foo (num){
    return new Promise((resolve,reject)=>{
        if(num>=18){
            resolve("Eligible to vote")
        }
        else{
               reject("Not Eligible to vote")
        }
    })
}
foo(18).then((data)=>console.log(data)).catch((error)=>console.log(error))
*/
//!promise chain
/*function mul(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num * 2), 2000);
  });
}
mul(5)
  .then((data) => {
    console.log(data); //10
    return mul(data); //mul(10)
  })
  .then((ele) => {
    console.log(ele); //20
    return mul(ele); //mul(20)
  })
  .then((ele1) => console.log(ele1)) //40
  .catch((error) => console.log(error));
  */
//!session task
/*function add(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num + 2), 2000);
  });
}
add(0)
  .then((data) => {
    console.log(data); //2
    return add(data); //add(2)
  })
  .then((ele) => {
    console.log(ele); //4
    return add(ele); //add(4)
  })
  .then((ele1) => {
    console.log(ele1); //6
    return add(ele1); //add(6)
  })
  .then((ele2) => {
    console.log(ele2); //8
    return add(ele2); //add(8)
  })
  .then((ele3) => console.log(ele3)) //10
  .catch((error) => console.log(error));
  */
//!promise.all()
/*
const promise1 = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => resolve("Promise1 is resolved"), 2000);
  } else {
    setTimeout(() => reject("Promise1 is rejected"), 4000);
  }
});
const promise2 = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => resolve("Promise2 is resolved"), 2000);
  } else {
    setTimeout(() => reject("Promise2 is rejected"), 4000);
  }
});
const promise3 = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => resolve("Promise3 is resolved"), 2000);
  } else {
    setTimeout(() => reject("Promise3 is rejected"), 4000);
  }
});
Promise.all([promise1, promise2, promise3])
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
*/
  
//!promise.allsettled
const promise1 = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => resolve("Promise1 is resolved"), 2000);
  } else {
    setTimeout(() => reject("Promise1 is rejected"), 4000);
  }
});
const promise2 = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => resolve("Promise2 is resolved"), 2000);
  } else {
    setTimeout(() => reject("Promise2 is rejected"), 4000);
  }
});
const promise3 = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => resolve("Promise3 is resolved"), 2000);
  } else {
    setTimeout(() => reject("Promise3 is rejected"), 4000);
  }
});
const result = Promise.allSettled([promise1,promise2,promise3]).then((data) =>
  data.forEach((result) => console.log(result))
);
