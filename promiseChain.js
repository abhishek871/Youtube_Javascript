cart =['shoes',"denim jacket","watch","socks"];

// createOrder
// proceedToPayment
// showSummary
// showWalletStatus
showWalletStatus=(data)=>{
    return new Promise((resolve,reject)=>{
        if(data.indexOf('Payment Summary')>-1)
        resolve("Your wallet money debited by 500$");
        else
        {
            let err=new Error("your money isn't debited.(Payment was not done)");
            reject(err);
        }
    })
}
showSummary=(data)=>{
    return new Promise((resolve,reject)=>{
        if(data==="Your payment is successful")
        {
            resolve("Payment Summary: You paid 500$ for 5 items");
        }
        else{
            let err=new Error("Can't show Summary(Payment is not Done)");
            reject(err);
        }
    })
}
proceedToPayment=(data)=>{
    return new Promise((resolve,reject)=>{
        if(data.length)
        {
            resolve("Your payment is successful");
        }
        else
        {
            let err=new Error("Your payment couldn't be completed");
            reject(err);
        }
    })
}
createOrder=(cart)=>{
return new Promise((resolve,reject)=>{
    if(!cart.length){
        const err=new Error("your Cart is Empty!");
        reject(err);
    }
    else{
        let orderID='69691';
        resolve(orderID);
    }
})
}



createOrder(cart)
.then(function(data){
    console.log("createOrder",data);
    return proceedToPayment(data);})
.then(function(data){
    console.log("proceedtoPayment:",data);
    return showSummary(data);
})
.then(function(data){
    console.log("showSummary:",data);
    return showWalletStatus(data);
})
.then(function(data){
    console.log("showWalletStatus:",data);
})
.catch(function(data){
    console.log("Error:",data);
})

