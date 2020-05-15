function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num)
}

function addAndHandler(n1: number, n2: number, cb: (a: number) => void) {
  const result = n1 + n2;

  cb(result)
}

printResult(add(2, 5))

let combineValues: (a: number, b: number) => number;

combineValues = add
console.log(combineValues(4, 4))


addAndHandler(10, 12, (result) => {
  console.log(result)
})