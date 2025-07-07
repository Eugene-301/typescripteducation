export {};

// types cheking on compile time rather than execution. Is static typification

const five: number = 5; // explicit typing
const six = 6; // type inference

// structural typing
// Is means if types have same field they are interchangeable
type User = {
  firstName: string;
  lastName: string;
};
type Person = {
  firstName: string;
  lastName: string;
};
