export {};

// generics conditional types is types who specifies one type to variable if transmited type extends specified type and other data type if it not extends

type isArray<T> = T extends any[] ? true : false;

//cause error:
// const first: isArray<string> = true
const first: isArray<string> = false;
const second: isArray<string[]> = true;

type User = {
  username: string;
};

type RandomName<T> = T extends User ? { value: number } : { value: string };

const third: RandomName<{ username: string; age: number }> = {
  value: 123,
};
