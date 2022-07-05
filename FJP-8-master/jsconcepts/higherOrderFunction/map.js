//higher order function are func that operate on another function only use for arrays
//either by taking them as argument or by returning them
// 1. Map
// map itself a function 
//map takes a callback function as an argument
//map will proces every value and will apply the instruction that is inside the callback function



/*let arr=[1,2,3,4,5]


/*for(let i=0; i<arr.length; i++ ){
    arr[i]=2*arr[i]
}
console.log(arr)
let sqaredArr=arr.map(function(n){
    return n*n
})
console.log(sqaredArr)
let nameArr=["Aniket Raj","Nayan Jha","prashant pandey"]
//use map method and separate firstname and lastname
let separate=nameArr.map(function(n){
    let partsOfName=n.split(' ')
    return partsOfName
})
console.log(separate)*/
const transaction=[1000,3000,4000,-898,3400,-450]
const inrtoUsd=74
let inUsd=transaction.map(function(n){
    return (n/inrtoUsd).toFixed(0)
})
console.log(inUsd)