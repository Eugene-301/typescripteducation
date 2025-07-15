export {};

// types narrowing implies what we can adduction types set to one type

// types narrowing for basic types
const func = (argument: number | string | null) => {
  if (typeof argument === "string") {
    return argument;
  } else if (typeof argument === "number") {
    return argument;
  }

  return argument;
};

const func1 = (argument: number | string | null, argument1: number) => {
  if (argument === null) {
    return argument;
  }

  if (argument === argument1) {
    return argument;
  }

  return argument;
};

// types narrowing for objects

interface User {
  username: string;
  age: number;
}

interface Person {
  lastname: string;
  firstname: string;
  age: number;
}

const func0 = (argument: User | Person) => {
  if ("username" in argument) {
    return argument;
  }

  if ("firstname" in argument) {
    return argument;
  }
};

// types narrowing for classes

class Bmv {}

class Audi {}

const newBmw = new Bmv();
const newAudi = new Audi();

const func2 = (argument: Bmv | Audi) => {
  if (argument instanceof Bmv) {
    return argument;
  } else {
    return argument;
  }
};

interface BaseCar {
  maxSpeed: number;
  weight: number;
}

interface Bmv extends BaseCar {
  type: "bmv";
  bmvField: string;
}

interface Audi extends BaseCar {
  type: "audi";
  audiField: string;
}

type Cars = Audi | Bmv;

const func3 = (argument: Cars) => {
  switch (argument.type) {
    case "audi":
      return argument;
      break;

    default:
      return argument;
      break;
  }
};
