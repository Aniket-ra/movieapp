let firstPerson={
    name:"adam",
    age: 23,
    address:{
        country: "India",
        city:{
            cityname:"delhi",
            pincode: 123456,
        },
    },
}

let secondPerson={...firstPerson, address: {...firstPerson.address, city:{...firstPerson.address.city}}} //shallow copy
let thirdperson=JSON.parse(JSON.stringify(firstPerson)) //deep copy
firstPerson.address.country="usa"
firstPerson.address.city.cityname="mumbai"
console.log(firstPerson)
console.log(secondPerson)
console.log(thirdperson)

