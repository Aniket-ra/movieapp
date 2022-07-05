// let car1={

//     name:'x6',
//     brand:'bmw',
//     color:"red",



// }

// let 
function CreateCar(Name, Brand, Color){
this.name=Name,
this.brand=Brand,
this.color=Color

this.test=function drive(){
    console.log(`I am Driving ${this.name}`)
}

}



let car1=new CreateCar("X6", "BMW", "RED") // constructor function
let car2=new CreateCar("X4", "AUDI", "BLACK")
car2.test()
console.log(car1)
console.log(car2)