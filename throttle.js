document.addEventListener("DOMContentLoaded", function() {
    console.log(Date.now());
 const btn=document.getElementById("btn");
 function print(...args){
    console.log("You clicked on button",...args);
 }
 let wait=2000;
const click = throttle(print,wait);
let counter=0;
 if(btn){
    btn.onclick = function () {
        counter++;
        click(counter);
    }
 }

 function throttle(func,wait){
    let time=null;
    return function (...args) {
        if(time==null){
            time=Date.now();
        }
        else{
            let time1=Date.now();

            if(time1-time>=wait){
                time=time1;
                func(...args);
            }
        }
    }
 }
});
 
 