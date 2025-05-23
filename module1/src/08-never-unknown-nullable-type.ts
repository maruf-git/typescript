{
  // nullable types / unknown types
  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("There is nothing to search");
    }
  };
  searchName(null);

  // unknown typeof
  const getSpeedInMeterPErSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} m/s`);
    }
    if (typeof value === "string") {
      const valueNubmer = parseFloat(value.split(" ")[0]);
      console.log(valueNubmer);
      const convertedSpeed = (valueNubmer * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} m/s`);
    }
  };
  getSpeedInMeterPErSecond("1000 km/h");

  //   never types
  const throwError = (msg: string): never => {
    throw new Error(msg);
  };

  throwError("Something went wrong");
}
