console.log("start");
async function helper(){
   
    const pr=new Promise((resolve,reject)=>{
        resolve("hello buddy");
    })
    
    console.log("before buddy");
    const data=await pr;
    console.log("after buddy");
    return data;
}
helper().then((data)=>console.log(data));
console.log("mid");


//order of console
/*
start
before buddy
mid
after buddy
hello buddy
*/

// why does that happended??
/*
*When ever js engine sees await statement, it just pops helper() function from call stack till 
the promise of that await statement is resolved.
*And once the promise is resolved,helper() function is called again into call stack and code 
starts executing from the line it was stopped.
i.e next to the await line.

promise .then()/.catch() vs async /await -> internally async/await too are implemented as 
.then()/.catch().
But they offer a good way of writing ...they also omit promise chaining.
*/


//=====================================
//making a fetch call using async / await
//=====================================
const API_URL="https://api.github.com/users/abhishek871";

async function fetchData(){
    const response=await fetch(API_URL);
    const data=await response.json();

    return data;
    // try{
    //     const response=await fetch(API_URL);
    //     const data=await response.json();
    //     return data;
    //     }catch(error){
    //         console.log(error);
    //     }
}

fetchData()
.then((data)=> console.log(data))
.catch((err)=> console.log(err));

//in above example...using try catch or not using try catch and using catch at outer part
// on function call are both similar ways.