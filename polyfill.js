/** PROTOTYPE : Every object in JavaScript has a built-in property, which is called its prototype.
 *              The prototype is itself an object, so the prototype will have its own prototype, 
 *              making what's called a prototype chain.
 *              The chain ends when we reach a prototype that has null for its own prototype. */

// ===============================================================

/* 1) forEach polyfill -> arr.forEach((item,index,self) => {}); */

        // Array.prototype.myforEach = function ( callback){
        //     if(typeof callback!== 'function'){
        //         throw console.error("Provide a function to be executed as callback");
        //     }

        //     const arr=this;

        //     for(let i=0;i<arr.length;i++){
        //         callback(arr[i],i,arr);
        //     }
        // }

        // let myArr= [1,2,3,4,5];
        // myArr.forEach((item,index,self)=>{
        //     console.log(item,index,self)
        // });

        // myArr.myforEach((item,index,self) => {
        //     console.log(item,index,self);
        // });

// =================================================================


/* 2) map -> arr.map((item,index,self)=>{}) */ 

        // Array.prototype.myMap = function (callback) {
        //     if(typeof callback!== 'function'){
        //         throw console.error("undefined is not a function");
        //     }

        //     const arr=this;
        //     let array=[];

        //     for(let i=0;i<arr.length;i++){
        //         array.push(callback(arr[i],i,arr));
        //     }

        //     return array;
        // }

        // let myArr = [1,2,3,4,5];

        // let newArr=myArr.map((item,index,self)=>{
        //     return item*2;
        // });
        // console.log(newArr);

        // let newArr2=myArr.myMap((item,index,self)=>{
        //     return item*2;
        // });
        // console.log(newArr2);


        // similarly for  -> find() , filter().
// ==============================================================

/** 3)  reduce -> arr.reduce((acc,cur)=>{},initialValue) */

        // Array.prototype.myReduce = function (callback,initialValue){
        //     if(typeof callback!== 'function'){
        //         throw console.error("undefined is not a function");
        //     }

        //     const arr=this;

        //     for(let i=0;i<arr.length;i++){
        //         initialValue=callback(initialValue,arr[i],i,arr);
        //     }

        //     return initialValue;
        // }

        // let myArr=[1,2,3,4,5];

        // let ans=myArr.myReduce((acc,cur,index,self)=>{
        //     return acc*cur;
        // },100);

        // console.log(ans);

// ============================================================

/** 4) call() -> foo.call(obj,...args) */

        // Function.prototype.myCall = function(context,...args){
        //         // here this refers to the function by which myCall is being called
        //         if(typeof this!=='function'){
        //                 console.log(`${this} is not a callable function`);
        //         }
        //         //context is an object
        //         context.refFunc=this;      //created a method inside context of type foo
        //         context.refFunc(...args);
        //         delete context.refFunc;
        // }

        // let obj={
        //         name:"abhishek",
        //         getName(){
        //                 console.log(this.name);
        //         }
        // }
        // function foo(age){
        //         console.log(this.name,age);
        // }
        // foo.myCall(obj,30);
        // console.log(obj);
        // foo.myCall(obj,50);
        
// ==============================================

/** 5) bind() -> 
  let fun = foo.bind(obj,...args);
  fun(...otherArgs);
  so here we can pass some of our params while binding foo to obj and also pass rest of 
  our params while calling the returned function through bind(); 
   */

        // Function.prototype.myBind = function (context,...args){
        //         if(typeof this !== 'function'){
        //                 throw console.error('this is not callable function');
        //         }

        //         context.refFunc=this;
        //         return function (...otherArgs){
        //                 context.refFunc(...args,...otherArgs);
        //         }
        // }

// ====================================================
var x = 3;
var char = 'A';

var foo = {
  x: 1,
  foo: {
    x:2,
    foo: function () {
      char = 'B';
      return this.x;
    }
  }
}

var go = foo.foo.foo;
console.log(char, go(), foo.foo.foo());



