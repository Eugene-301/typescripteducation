export {};

// intersection means that variable must have all specified data types
// let value: number & string - this cause a error, variable can`t be at the same time number and string. Is never type

// intesection in objects

type MainInfo = {
  firstName: string;
  lastName: string;
};

type AdditionalInfo = {
  age: number;
};
