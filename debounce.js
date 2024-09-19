// normal function based implementation

function debounce(func,wait){
    let timerid=null;
    return function(...args) {
        let context=this;
        if(timerid!=null)
            clearTimeout(timerid);

        timerid=setTimeout(function(){func.apply(context,args)},wait);
    }

}
let obj={
    a:10,
    increment:increment
}
function increment(count){
    
    console.log(this.a+count);
}
const counter = debounce(obj.increment.bind(obj),5000);

counter(0);
counter(0);
counter(0);

