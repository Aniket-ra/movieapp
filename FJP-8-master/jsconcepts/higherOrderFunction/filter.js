//filter



let arr=[2,4,5,6,7,-8,-9,-12,14]
/*for(let i=0; i<arr.length; i++){
    if(arr[i]%2===0){
        console.log(arr[i])
    }
}


let even=arr.filter(function(n){
    return n%2==0
})
console.log(even)*/
let postive=arr.filter(function(n){
    return n>0
})
console.log(postive)