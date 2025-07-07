export {};

// unkown is more safety version of any data type. It forces check types before interact with they

let value: unknown;
value = 42;
value = [];
value = {};
value = false;

let stringValue: string = "Olele";
value = stringValue;
// let stringValue: string = value - cause error
if (typeof value === "string") stringValue = value;

function logData(data: unknown) {
  let oleg: string;

  // let oleg: string = data - cause error

  if (typeof data === "string") oleg = data;
}
