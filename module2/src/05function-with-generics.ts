{
  // function with generics

  const createArray = (param: string): string[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  console.log(res1);

  // create array with generics
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res2 = createArrayWithGeneric<string>("Bangladesh");
  console.log(res2);

  interface User {
    name: string;
    id: string;
  }
  const resGenericObj = createArrayWithGeneric<User>({
    name: "maruf",
    id: "2102027",
  });
  console.log(resGenericObj);

  const createArrayWithGenericTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const resGenericTuple = createArrayWithGenericTuple<string, number>(
    "maruf",
    2102027
  );
  console.log(resGenericTuple);


  const addCourseToStudent =<T> (student:T)=>{
    const course ="Next Level Web Development";
    return{
        ...student,
        course
    }
  }

  const student1 = addCourseToStudent({name:"maruf", email:"maruf@gmail.com", devType:"NLWD"});

  const student2 = addCourseToStudent({name:"himel", email:"himel@gmail.com", hasWatch:"AppleWatch"});

  console.log(student1);

  console.log(student2);
  
}
