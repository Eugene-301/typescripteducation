export {};

// never type is impossible data type it means we get they if function can`t return value

let neverValue: never;
let stringValue: string = neverValue;

// Cause error:
// let stringValue: string = '123';
// let neverValue: never = srtrinValue

enum Values {
  FIRST,
  SECOND,
}

function func(value: Values) {
  switch (value) {
    case Values.FIRST:
      return value;
      break;
    case Values.SECOND:
      return value;
      break;
    default:
      const check: never = value;
      return value;
      break;
  }
}
