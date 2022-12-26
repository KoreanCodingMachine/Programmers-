// 두 정수 a,b가 주어졌을때 두 정수의 합을 리턴하는 함수

function solution(a, b) {
  let answer = 0;

  if (a > b) {
    for (let i = a; i >= b; i--) {
      answer += i;
    }
  } else {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
  }

  return answer;
}

console.log(solution(5, 3));
console.log(solution(3, 5));
