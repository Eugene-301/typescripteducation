export {};

// literals is data type who indicates only certain variable values

type Color = "red" | "green" | "blue";

const color: Color = "green";

// const colorWhite: Color = "white" - cause error

// as const indicates what that object is const
const colors = {
  color: "green",
} as const;

interface User {
  readonly id: string;
} // makes field of composite type is readonly during declaration

// we can union literals with other types
type Event = "click" | "change";
type EventHandler = `on${Event}`;

type UserId = `user_id_${bigint}`;
