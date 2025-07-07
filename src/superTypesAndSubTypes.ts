export {};

// supertype is a parent type whose fields are contained subtype but subtype also can have own fields

type SuperType = {
  name: string;
};

type SubType = {
  name: string;
  age: number;
};

// we can assign variable whose data type have more field to variable who data type contains less fields, but have fields names as the larger type
const subType: SubType = { name: "Lelele", age: 43 };
const superType: SuperType = subType;

// Causes error:
// const superType2: SuperType = {name: "Tralalo Tralala"}
// const subType2: SubType = superType
