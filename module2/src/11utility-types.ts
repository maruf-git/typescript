{
  // utility type

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };
  // Pick type
  type NameAge = Pick<Person, "name" | "age">;

  // Omit type
  type ContactInfo = Omit<Person, "name" | "age">;

  // Required
  type PersonRequired = Required<Person>;

  // Partial
  type PersonPartial = Partial<Person>;

  // Readonly
  type PersonReadOnly = Readonly<Person>;
  const person1: PersonReadOnly = {
    name: "maruf",
    age: 23,
    contactNo: "017",
  };

  // Record type
  // type MyObj ={
  //     a:string,
  //     b:string
  // }
  const emptyObj: Record<string,unknown> = {};
  emptyObj.name = "maruf";
  emptyObj.age = 23;
  emptyObj.user = true;

  type MyObj = Record<string, string | number>;
  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: 5,
  };
}
