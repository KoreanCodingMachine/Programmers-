// 1-1. 입력된 수가 짝수라면 2로 나눕니다.
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.

function solution(num) {
  let answer = 0;

  // 주어진 숫자가 1인경우 0을 리턴함
  if (num === 1) {
    return answer;
  }

  // 문제의 조건
  for (let i = 0; i < 500; i++) {
    if (num % 2 === 0) {
      num = num / 2;
      if (num === 1) {
        return (answer = i + 1);
      } else {
        continue;
      }
    }

    if (num % 2 === 1) {
      num = num * 3 + 1;
      if (num === 1) {
        return (answer = i + 1);
      } else {
        continue;
      }
    }
  }

  answer = -1;

  return answer;
}

console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));
