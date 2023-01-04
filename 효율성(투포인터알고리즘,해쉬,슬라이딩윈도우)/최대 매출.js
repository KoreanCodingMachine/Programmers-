// 현수의 아빠는 제과점을 운영합니다. 현수 아빠는 현수에게 N일 동안의 매출기록을 주고 연속
// 된 K일 동안의 최대 매출액이 얼마인지 구하라고 했습니다.
// 만약 N=10이고 10일 간의 매출기록이 아래와 같습니다. 이때 K=3이면
// 12 15 11 20 25 10 20 19 13 15
// 연속된 3일간의 최대 매출액은 11+20+25=56만원입니다.
// 여러분이 현수를 도와주세요.

function solution(k, arr) {
  let answer;
  let sum = 0;
  let lt = 0;
  let new_arr = [];

  for (let rt = k - 1; rt < arr.length; rt++) {
    sum = arr[lt++] + arr[rt - 1] + arr[rt];
    new_arr.push(sum);
  }

  new_arr.sort((a, b) => b - a);
  answer = new_arr[0];
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
