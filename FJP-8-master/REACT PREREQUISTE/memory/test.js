//call by value (primitive datatype)


// let firstPerson = "Adam";

// let secondPerson = firstPerson;

// firstPerson = "steve";

// console.log(firstPerson);

// console.log(secondPerson);

//call by reference (for array and objects Referenced datatype)
let firstPerson = {
    name :'Adam',
    age : 23
}


let secondPerson = {...firstPerson}


firstPerson.name = 'Steve'


console.log(firstPerson)
console.log(secondPerson)