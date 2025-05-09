{
  // generic type
  // it is dynamically created type
  type GenericArray<T> = Array<T>;
  // const rollNumbers:number[]=[3,6,9];
  const rollNumbers: GenericArray<number> = [3, 6, 9];
  // const mentors:string[]=["maruf","rifat","shifat"];
  const mentors: GenericArray<string> = ["maruf", "rifat", "shifat"];
  // const boolArray:boolean[]=[true,false,true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  // array of objects using generic type
  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "maruf",
      age: 20,
    },
    {
      name: "rifat",
      age: 21,
    },
  ];
  //generic tuple
  type GenericTuple<X,Y>=[X,Y];
  const manush:GenericTuple<string,string> = ["Mr. X","Mrs Y"];
  
  const add = (x: number, y: number): number => x + y;
  add(10, 20);
}
