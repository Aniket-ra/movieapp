 function placeOrder(drink){
     return new Promise(function(resolve, reject){
         if(drink=='cofee'){
             resolve('order  for cofee placed')
         }
       else{
           reject('order cannot placed')
       }
     })
 }
 function processOrder(order){
     return new Promise((resolve) => {
        resolve(`${order} and served`) 
     })
 }
// placeOrder('cofee').then(function(orderStatus){
//     console.log(orderStatus)
//     let orderisProcessed =processOrder(order)
//     return orderisProcessed
// }).then(function(servedOrder){
//     console.log(servedOrder)
// }).catch(function(orderStatus){
//     console.log('orderStatus')
// })
//Async Awat
async function servedOrder(){
    try{
        let orderStatus=await placeOrder('cofee')
    console.log(orderStatus)
    

    }
    catch (error){
        console.log(error)

    }
    
}
servedOrder()