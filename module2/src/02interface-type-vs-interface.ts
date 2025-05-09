{
  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  type UserWIthRole1 = User1 & { role: string };
  const user1: UserWIthRole1 = {
    name: "maruf",
    age: 23,
    role: "admin",
  };

  interface UserWithRoll2 extends User2 {
    role: string;
  }

  const user2: UserWithRoll2 = {
    name: "munna",
    age: 23,
    role: "admin",
  };

  // interface can not be used in primitive data type
  // type alias and interface both can be used to define non primitive types
}
