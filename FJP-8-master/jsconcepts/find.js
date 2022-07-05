//find returns the first element of an aray that satisfy the condition
const transaction=[3000, 8000,-7678,-678,-789];
let firstWidhrawl=transaction.find(function(n){
    return n<0
})
console.log(firstWidhrawl)