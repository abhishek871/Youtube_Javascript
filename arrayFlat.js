// Flatten an array 

//const arr=[
//     [1,2],
//     [3,4],
//     [5,6,[7,8,[9,10]]],
//     [11,12]
// ];

// function customFlat(arr,depth){
//     let result=[];
//     arr.forEach(element => {
//         if(Array.isArray(element)&&depth>0){
//             result.push(...customFlat(element,depth-1));
//         }
//         else{
//             result.push(element);
//         }
//     });
//     return result;
// }

// console.log(customFlat(arr,2));
// console.log(customFlat(arr,3));


//==========================


for(var i = 0; i < 3; i ++){
    function timer(iter){
             setTimeout(()=>{
                     console.log(iter);    
             }, iter * 1000)
     }
 timer(i);
 }