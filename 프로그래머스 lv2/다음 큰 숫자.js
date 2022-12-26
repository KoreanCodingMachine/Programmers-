// 조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
// 조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
// 조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.

// n을 2진수로 변환했을때의 수와 1의 갯수가 같으면서 n보다 큰 자연수 중에 가장 작은 자연수

// n을 2진수로 변환하는 방법은 ? 구글링 ->toString(2)
// n을 2진수로 변환했을때 1의 개수를 구하는 방법

function getOneCount(n) {
  let bin = n.toString(2);
  let count = 0;

  for (let i = 0; i < bin.length; i++) {
    if (Number(bin[i]) === 1) count++;
  }

  return count;
}

function solution(n) {
  let answer = 0;

  for (let i = n + 1; i < Infinity; i++) {
    if (getOneCount(n) === getOneCount(i)) {
      answer = i;
      break;
    }
  }

  return answer;
}

// 2진수로 변환하는 방식

// let dec = 123;
// let bin = dec.toString(2);
// console.log(bin); // 1111011
// console.log(typeof bin); // string

console.log(solution(78));
