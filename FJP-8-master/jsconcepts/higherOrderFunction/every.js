//every returns true only when all elements follow the given condition
const transaction=[-3000, -8000,-7678,-678,-789];
let firstWidhrawl=transaction.every(function(n){
    return n<0
})
console.log(firstWidhrawl)