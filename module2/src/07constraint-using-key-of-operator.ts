{
    type Vehicle={
        bike:string,
        car:string,
        ship:string
    }

    type Owner ="bike" | "car" | "ship"; //manually 
    type Owner2 = keyof Vehicle; // using key of operator

    const getPropertyValue=<X,Y extends(keyof X)>(obj:X,key:Y)=>{
        return obj[key];
    }
    const user ={
        name:"Md Maruf",
        age:23,
        address:"Dinajpur"
    }
    const result1 = getPropertyValue(user,"name");
    console.log(result1);
    // console.log(user['name']);
}