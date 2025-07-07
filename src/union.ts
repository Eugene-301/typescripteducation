export {};

// union type
// is means that variable can have value type one of specified data types

let data: number | string;
data = 5;
data = "string";

let color: "red" | "green";

// unioin type in objects
type MainInfo = {
  firstName: string;
  lastName: string;
};

type AdditionalInfo = {
  age: number;
};

type FullInfo = AdditionalInfo | MainInfo;

const info0: FullInfo = { firstName: "123", lastName: "123", age: 123 };
const info1: FullInfo = { firstName: "qwe", lastName: "qwe" };
const info2: FullInfo = { age: 345 };
