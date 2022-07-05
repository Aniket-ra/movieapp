// some returns true if any one element follows the condition

const transaction=[3000, 8000,-7678,-678,-789];
let firstWidhrawl=transaction.some(function(n){
    return n<0
})
console.log(firstWidhrawl)