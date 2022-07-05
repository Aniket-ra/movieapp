//sum of all number 1 to 10
let arr=[1,2,3,4,5,6,7,8,9,10]
let sumOfArray=arr.reduce(function(sum, value){
    let updatedSum=sum*value
    return updatedSum
},1)
console.log(sumOfArray)