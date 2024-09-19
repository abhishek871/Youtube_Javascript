// function retryPromise(numberOfTimes=5){
//     let itr=0;
//     while(itr<2*numberOfTimes){
//      makeCall(itr).then((data)=>{
//         console.log("Promise fulfilled:", data);
//      }).catch((data)=>{
//         console.log("Promise rejected: ", data);
        
//      })
//      itr++;
//     }
// }

// function makeCall(itr){
//     const pr=new Promise((resolve,reject)=>{
//         if(itr%2){
//             resolve("we are successful");
//         }
//         else{
//             reject("we lost");
//         }
//     });
//     return pr;

// }
// retryPromise(3);

// function multiply(x,y){
//     return x*y;
// }

// let multiply2=multiply.bind(this,2);
// console.log(multiply2(10));
let ans=function (val){
    return function (val1){
        return val1 ? ans(val+val1) : val;
    }
}
let fun=ans(1)(2)(3)();
console.log(fun);