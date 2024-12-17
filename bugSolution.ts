function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    throw new Error("Invalid input: Arguments must be numbers");
  }
}

let result1 = addSafe(1, 2); // Correct usage, returns 3
let result2 = addSafe("1", 2); // throws error
console.log(result1); //3
//console.log(result2); // throws error 