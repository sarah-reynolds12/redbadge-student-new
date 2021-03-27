// Problem 4
// Keep the return type string

function subtractNums(num1: number|string, num2: number|string): string {
  let numberSub = Number(num1) - Number(num2);
  return `Your total is ${numberSub}`
}

console.log(subtractNums("10", "5"));
