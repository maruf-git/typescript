{
  const age: number = 15;
  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }

  const isAdult = age >= 18 ? "adult" : "not adult";
  console.log({ isAdult });

  // nullish coalescing operator
  // we use it for making decision depending on null or undefined value

  const isAuthenticated = "";
  const result1 = isAuthenticated ?? "Guest";
  console.log({ result1 });

  const result2 = isAuthenticated ? "Yes Authenticated" : "Guest";
  console.log({ result2 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };
  const user: User = {
    name: "maruf",
    address: {
      city: "Dinajpur",
      road: "Awesome Road",
      presentAddress: "Dinajpur",
    },
  };

  console.log({ user });
  const permanentAddress =
    user?.address?.permanentAddress ?? "No Permanent Address";
}
