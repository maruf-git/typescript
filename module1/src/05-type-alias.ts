// type alias 
type Student = { 
  name: string;
  age: number;
  contactInfo?: string;
  address: string;
};

const student1: Student = {
  name: "maruf",
  age: 23,
  contactInfo: "017",
  address: "Dinajpur",
};
console.log(student1);

const student2: Student = {
  name: "orion",
  age: 21,
  address: "Dinajpur",
};
console.log(student2);
