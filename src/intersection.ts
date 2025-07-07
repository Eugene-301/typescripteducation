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

type FullInfo = MainInfo & AdditionalInfo;

const info0: FullInfo = { firstName: "123", lastName: "123", age: 123 };
// Causes error:
// const info1: FullInfo = { firstName: "qwe", lastName: "qwe" };
// const info2: FullInfo = { age: 345 };
