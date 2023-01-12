// var name = "raj"
// var email = "raj@gmail.com"
// var sal = 10000.23
// var age = 23

// console.log(name)
// console.log(email)
// console.log(sal)
// console.log(age)


//key value pair JSON --> JavaScript Object Notation
var employee = 
{
    name:"raj",
    email:"raj@gmail.com",
    sal:10000.23,
    age:23,
    address :{
        city:"Ahmedabad",
        state:"Gujarat",
        country:"India",
        pincode:380001,
    }
}
console.log(employee.name ,"-",employee.address.pincode)


var students =[
    {
        name:"raj",
        email:"raj@gmail.com",
        age:20

    },
    {
        name:"jay",
        email:"jay@gmail.com",
        age:26,
        course:["java","python","javascript"]
    }
]

for(let i=0;i<students.length;i++)
{
    if(students[i].age>25){
        console.log(students[i].name)
        console.log(students[i].email)
        
        for(let j=0;j<students[i].course.length;j++)
        {
            console.log(students[i].course[j])
        }

    }
}