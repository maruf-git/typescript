{
  // type assertion
  let anything: any;
  anything = "Next level web development";
  const length: number = (anything as string).length;
  console.log(length);

  const kgToGram = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted Value is ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 100;
    }
  };

  const result1= kgToGram(1000) as number;
  const  result2 = kgToGram("1000") as string;
  type CustomError={
    message:string
  }
  try{

  }catch(error){
    console.log((error as CustomError).message);
  }
}
