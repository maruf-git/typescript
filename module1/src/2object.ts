const user={
    firstName:"maruf",
    middleName:"Ur Rahman",
    lastName:"munna"
} // implicit type

const student:{
    school:"Programming Hero" // type --> literal types
    firstName:string,
    middleName?:string | undefined, // optional type
    lastName:string
    roll:number
}={
    school:"Programming Hero",
    firstName:"maruf",
    middleName:"Ur Rahman",
    lastName:"munna",
    roll:2102027
}
console.log(student)