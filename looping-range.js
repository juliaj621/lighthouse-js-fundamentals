function range(start, end, step) {
  let array = [] ;
  if (start > end || step <= 0 || start === undefined || end === undefined || step === undefined) {
    return array; 
  }
  for (let i = start; i <= end; i = i + step) {
    array.push(i)
  }
  return array
}




console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));