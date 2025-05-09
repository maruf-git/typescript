{
  interface Developer<T> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releasedYear: Number;
    };
    smartWatch: T;
  }
type EmilabWatch={
    brand: string;
    model: string;
    display: string;
  }
  const poorDeveloper: Developer<EmilabWatch> = {
    name: "Maruf",
    computer: {
      brand: "Asus",
      model: "VivoBook",
      releasedYear: 2021,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw66",
      display: "Amoled",
    },
  };

  interface AppleWatch{
    brand:string,
    model:string,
    heartTrack:boolean,
    sleepTrack:boolean
  }

  const RichDeveloper: Developer<AppleWatch> = {
    name: "Munna",
    computer: {
      brand: "HP",
      model: "x-12ur",
      releasedYear: 2021,
    },
    smartWatch: {
      brand: "Apple",
      model: "Something",
      heartTrack: true,
      sleepTrack: true,
    },
  };
}
