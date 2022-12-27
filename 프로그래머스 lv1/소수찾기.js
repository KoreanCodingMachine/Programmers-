//1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

// 소수란 ? 1과 자기자신만 약수를 가지는 숫자이다.
// 그럼 반대로? 소수가 아닌 숫자는 약수의 개수가 2개 초과 인것이다. (1 , 자기자신 , ...)
// 그럼 소수를 판별하는 기준으로 약수의 개수가 2개 초과인지 아닌지를 기준으로 나눠보자

// 약수의 개수를 구하는 방법은 ? 반복문을 순회하면서 나누었을때 나머지가 0인지 아닌지

function measure(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) count++;
  }

  return count;
}

function solution(n) {
  let answer = 0;

  // 소수에서 1은 제외함
  for (let i = 2; i <= n; i++) {
    if (measure(i) === 2) answer++;
  }

  return answer;
}

// 시간 초과가 나왔지만 두 함수를 하나로 합쳐보고 싶어서 구현했다.
function solutions(n) {
  let answer = 0; //

  for (let i = 2; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) count++;
    }
    if (count === 2) answer++;
  }

  return answer;
}

console.log(solutions(10));
console.log(solutions(5));

// 시간초과가 나오지 않는 풀이방법

// Math.sqrt() -> 제곱근을 구하는 함수

// 에라토스테네스의 체

// 1을 제외하고 2부터 N까지 자신을 제외하고 순차적으로 자신의 배수들을 지워가면 결국에는 소수들만 남는다는 원리이다.
// n까지가 아니라 √n까지만 검사해도 결과는 같다.

function isPrime(x) {
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }
  return true;
}

function solutionss(n) {
  let answer = 0;

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) answer++;
  }

  return answer;
}

console.log(Math.sqrt(5));
console.log(solutionss(10));

function solutionsss(n) {}
