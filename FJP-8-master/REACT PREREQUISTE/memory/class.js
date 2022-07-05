class person{
    constructor(name,age,gender){
        this.Name=name,
        this.Age=age,
        this.Gender=gender

    }

}


// INHERITANCE
class Teacher extends person{
    constructor(name,age,classStrength){
        super(name,age)
        this.ClassStrength=classStrength
        
    }
}
class Student extends person{
    constructor(name,age,cgpa){
        super(name,age)
        this.Cgpa=cgpa
        
    }
}


let person1=new person('Adam', 20, 'male')
let Teacher1=new Teacher('Steve', 40, 50)
let Student1=new Student('Mark', 15, 8)
console.log(person1)
console.log(Teacher1)
console.log(Student1)



