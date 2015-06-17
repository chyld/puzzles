function factorial(n) {
  if(!n) return 1;
  return n * factorial(n > 0 ? n - 1 : n + 1);
}


console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(-2));
console.log(factorial(-3));
