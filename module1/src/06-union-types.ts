{
  // union types |
  type FrontendDeveloper = "Fakibaz Developer" | "Junior Developer"; // string literal type

  type FullStackDeveloper = "Frontend Developer" | "Expert Developer";

  type developer = FrontendDeveloper | FullStackDeveloper;

  const newDeveloper: FrontendDeveloper = "Fakibaz Developer";
  console.log(newDeveloper);

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "A+" | "B+" | "AB+" | "O-" | "A-" | "B-" | "AB-";
  };

  const user1: User = {
    name: "maruf",
    gender: "male",
    bloodGroup: "O+",
  };

//   intersection types &
  type WebDeveloper = {
    skills: string[];
    designation1: "Fronted Developer";
  };

  type ProWebDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type NextLevelDeveloper = WebDeveloper & ProWebDeveloper;
  const fullStackDeveloper: NextLevelDeveloper = {
    skills: ["html", "css", "js", "express"],
    designation1: "Fronted Developer",
    designation2: "Backend Developer",
  };

  console.log(fullStackDeveloper);
}
