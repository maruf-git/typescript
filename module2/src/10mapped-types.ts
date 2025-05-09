{
    // mapped types

    const arrOfNumbers:number[]=[1,2,3];
    const arrOfStrings:string[]=["1","2","3"];

    const arrayOfStrings:string[]=arrOfNumbers.map(number=>number.toString());
    console.log(arrayOfStrings);

    type AreaNumber={
        height:number,
        width:number
    }
    type Height=AreaNumber["height"]; // lookup type
    // type AreaString={
    //     height:string,
    //     width:string
    // }
    type AreaString ={
        [key in keyof AreaNumber]:string
    }
}