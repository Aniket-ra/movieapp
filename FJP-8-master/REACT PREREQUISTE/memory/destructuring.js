let arr=[ 'hi', 'I', 'am', 'aniket']
let elem= arr[1]

//  array destructuring

let[a, b, c, d, e='bye']=arr

console.log(a)

console.log(a,b,c,d,e)

//object destructuring

let obj={
    name: 'adam',
    state: 'new york',
    phone:1234567
}

let{state, name:firstName, phone}=obj

console.log(firstName, state, phone)


let obj2={
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



let{name}=obj2

let{address:{country :cd}}=obj2


