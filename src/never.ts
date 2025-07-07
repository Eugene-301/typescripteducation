export {};

// never type is impossible data type it means we get they if function did not return value

let neverValue: never;
let stringValue: string = neverValue;

// Cause error:
// let stringValue: string = '123';
// let neverValue: never = srtrinValue
