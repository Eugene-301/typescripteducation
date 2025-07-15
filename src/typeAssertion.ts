export {};

interface Person {
  age: number;
  username: string;
}

// we can cast to type unkown variable with "as" construction or specify "<Type>" before

const object0 = {
  age: 24,
  username: "oleg",
} as Person;

const object1 = <Person>{
  age: 344,
  username: "Olga",
};

const string0 = "123" as unknown as number;

// satisfies not cast rype this check only correspondence fields
const object2 = {
  age: 42,
  username: "olexi",
} satisfies Person;

const JsonParser = <T>(data: string): T => {
  return JSON.parse(data) as T;
};

const parsedJson: Person = JsonParser<Person>("123");

const function0 = async () => {
  const data = await fetch("");
  const parseData = await data.json();
};

const personKeys = {
  age: "age",
  username: "username",
} as const;

const keys = <T>(data: T): Array<keyof T> => {
  return Object.keys(data) as Array<keyof T>;
};

const keysTypes = keys(personKeys);
