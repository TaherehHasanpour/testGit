
//1
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrime(17)); 

//2
const employee = {
  name: "tahereh",
  age: null,
  job: "developer",
  address: undefined,
  salary: 5000
};

function cleanObject(obj) {
  Object.keys(obj).forEach(key => {
    if (obj[key] == null) delete obj[key];
  });
  return obj;
}

console.log(cleanObject(employee));


//3
const arr = [1, 2, 3, 4, 5, 6];

const evens = arr.filter(n => n % 2 === 0);
console.log(evens);



//4
const nums = [10, 20, 30, 40];

const sum = nums.reduce((a, b) => a + b, 0);
console.log(sum);


//5
function fibonacci(n) {
  const f = [0, 1];
  for (let i = 2; i < n; i++) {
    f.push(f[i - 1] + f[i - 2]);
  }
  return f.slice(0, n);
}

console.log(fibonacci(10));



//6
function factorial(n) {
  let result = 1n;
  for (let i = 2n; i <= BigInt(n); i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(60).toString());





