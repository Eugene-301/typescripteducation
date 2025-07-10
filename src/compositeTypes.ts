export {};

// exist two composite types is interface and type. They almost the same

interface User {
  firstName: string;
  age: number;
}

// One composite type may be a part of other

interface Coords {
  x: number;
  y: number;
  z: number;
}

type Person = {
  firstName: string;
  age?: number; // ? - designates this field is optional
  coords: Coords;
};

const person: Person = {
  firstName: "oleksiy",
  coords: {
    x: 12,
    y: 42,
    z: 52,
  },
};

const persons: Person[] = []; // Can create array of variables with specified composite data type

// with composite data tapes we can the same onse interactions like simple data types
