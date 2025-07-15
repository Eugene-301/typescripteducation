export {};

// type guards is all type narrowing methods, in this topic describes user made type narrowing functions

interface Car {
  maxSpeed: number;
  weight: number;
}

interface Bmv extends Car {
  type: "bmv";
}

interface Audi extends Car {
  type: "audi";
}

interface Person {
  age: number;
  name: string;
}

type Cars = Audi | Bmv;

const isBmv = (value: Cars): value is Bmv => {
  return value.type === "bmv";
};

const isCar = (value: Car | Person): value is Car => {
  return "maxSpeed" in value && "weight" in value;
};

const isPerson = (value: Car | Person): value is Person => {
  return "age" in value && "name" in value;
};

const function0 = (data: Car | Person) => {
  if (isCar(data)) {
    return data;
  }
};
