{
  // conditional type
  type a1 = number;
  type b1 = string;
  type x = a1 extends null ? true : false; // conditional type // x is false now
  type y = a1 extends null ? true : b1 extends undefined ? undefined : any; // y is any now

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
  };
  //   car ase kina / bike ase kina / ship ase kina
  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  type HasBike = CheckVehicle<"car">
}
