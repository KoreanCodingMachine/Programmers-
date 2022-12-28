// 우선 제곱을 계산하는 법 => Math.pow()

function solution(dartResult) {
  let answer = 0;
  let number = 0;
  let cnt = [];
  for (let i = 0; i < dartResult.length; i++) {
    if (!isNaN(dartResult[i]) && dartResult[i] >= 0 && dartResult[i] <= 9) {
      number = dartResult[i];
    } else if (dartResult[i] === 'S') {
      cnt.push(number);
    } else if (dartResult[i] === 'D') {
      cnt.push(Math.pow(number, 2));
    } else if (dartResult[i] === 'T') {
      cnt.push(Math.pow(number, 3));
    } else if (dartResult[i] === '*') {
      cnt[cnt.length - 2] = cnt[cnt.length - 2] * 2;
      cnt[cnt.length - 1] = cnt[cnt.length - 1] * 2;
    } else if (dartResult[i] === '#') {
      cnt[cnt.length - 1] = -1 * cnt[cnt.length - 1];
    }
  }

  answer = cnt.reduce((acc, cur) => acc + cur, 0);

  return answer;
}
