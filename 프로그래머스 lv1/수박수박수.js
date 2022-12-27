// 길이가 n이고 '수박수박수' 패턴을 유지하는 문자열을 리턴하는 함수 solution을 완성해라

//  규칙을 찾으면 쉽게 해결할것 같다. 길이가 홀수면 수 , 짝수면 박으로 끝나도록 구현

function solution(n) {
  let answer = '';

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      answer += '수';
      continue;
    }
    if (i % 2 === 1) {
      answer += '박';
      continue;
    }
    if (i % 2 === 0) {
      answer += '수';
      continue;
    }
  }

  return answer;
}

console.log(solution(4));
