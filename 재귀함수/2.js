// 10진수 N이 입력되면 2진수로 변환하여 출력하는 프로그램을 만드세요, 단 재귀함수 이용
// 2진수를 구하는 방식은 2로 나누었을때 나머지를 구하는 방식과 같음

function solution(n) {
  let answer = '';
  function DFS(n) {
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2));
      answer += String(n % 2);
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(11));
