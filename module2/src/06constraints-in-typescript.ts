{
  // constraints
  const addCourseToStudent = <T extends {id:number,name:string,email:string}>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 222,
    name: "maruf",
    email: "maruf@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    id: 342,
    name: "himel",
    email: "himel@gmail.com",
    hasWatch: "AppleWatch",
  });
  
  const student3 = addCourseToStudent({
    id:23,
    name:"shifat",
    email:"shifat@gmail.com",
    emni: "emni",
  });

  console.log(student3);
}
