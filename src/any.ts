export {};

// any type means the variable can have any data type, is a bad practice and no use in real prod

let value: any;
value = 5;
value = [];
value = {};

function logData(data: any[]) {
  console.log(data);
}

logData(value);
