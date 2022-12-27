// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요.
// 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다

// 최대공약수 ->  두 수 A와 B의 공통된 약수 중에 가장 큰 정수이다.
// Math.min() -> 주어진 수 중 가장 작은 수를 반환한다.

// 최소공배수 -> 공통인 배수중 가장 작은 수

function solution(n, m) {
  let answer = [];

  let gcd = 1; // 최대 공약수 기본 값
  let lcm = 1; // 최소 공배수 기본 값

  for (let i = 2; i <= Math.min(n, m); i++) {
    if ((n % i === 0) & (m % i === 0)) {
      gcd = i;
    }
  }

  for (let i = 0; i <= Infinity; i++) {
    if (lcm % n === 0 && lcm % m === 0) {
      break;
    }
    lcm++;
  }

  answer.push(gcd);
  answer.push(lcm);

  return answer;
}

// console.log(Math.min(3, 12)); // 3

// console.log(Math.min(2, 5)); // 2

console.log(solution(3, 12));
console.log(solution(2, 5));
