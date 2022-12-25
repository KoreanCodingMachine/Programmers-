// 2016년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성해라

function solution(a, b) {
  let answer = '';
  let sum = 0;

  const day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  for (let i = 0; i < a; i++) {
    sum += month[i];
  }

  answer = day[(sum % 7) - 1];
  return answer;
}

console.log(solution(5, 24));

function getDayName(a, b) {
  let date = new Date(2016, a - 1, b);
  return date.toString().slice(0, 3).toUpperCase();
}

console.log(getDayName(5, 24));
