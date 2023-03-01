// 피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.
// 2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.
// n번째 피보나치수를 return

// 피보나치수는 0부터 0 1 1 2 3 5 8 13 ...

// 재귀를 이용한 풀이
// function solution(n) {
//   var answer = 0;

//   if (n <= 1) {
//     return n;
//   } else if (n >= 2) {
//     return solution(n - 1) + solution(n - 2);
//   }
// }

console.log(solution(8));

function solution(n) {
  var answer = [];

  for (let i = 0; i <= n; i++) {
    if (i === 0) answer.push(0);
    if (i === 1) answer.push(1);
    if (i >= 2) {
      let sum = answer[i - 1] + answer[i - 2];
      answer.push(sum % 1234567);
    }
  }

  let result = answer[n];
  return result;
}
