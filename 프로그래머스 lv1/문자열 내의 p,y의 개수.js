// 문자열 s내의 p와 y의 개수를 비교해 같으면 true를 return하고 다르면 false를 return하는 함수를 만들어라
// 이때 대,소문자 구별은 하지 않는다.

function solution(s) {
  let answer = true;
  let num1 = 0;
  let num2 = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i].includes('p') || s[i].includes('P')) num1++;
    if (s[i].includes('y') || s[i].includes('Y')) num2++;
  }

  if (num1 === num2) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}
