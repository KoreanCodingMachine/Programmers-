// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// Math.sqrt(x)

// 숫자가 소수인지 아닌지 판별하는 방법

// 1. Number.isInteger 활용
// 2. % 1 === 0 ?

function solution(n) {
  let sqrt = Math.sqrt(n);

  if (Number.isInteger(sqrt)) {
    return (sqrt + 1) * (sqrt + 1);
  } else {
    return -1;
  }
}

console.log(Math.sqrt(4)); // 2
console.log(Math.sqrt(3)); // 1.7320508075688772

console.log(solution(121));
console.log(solution(3));
