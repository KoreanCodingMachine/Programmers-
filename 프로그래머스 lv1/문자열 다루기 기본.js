// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수,
//  solution을 완성하세요.
//  예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// NaN 과 NaN을 비교하면 false가 나오기 때문에 조건식에서 Number(s) !== NaN 이 성립되지 않음

function solution(s) {
  let answer = true;

  if ((s.length === 4 || s.length === 6) && s == parseInt(s)) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}

console.log(solution('a234'));
console.log(solution('1234'));

console.log(Number('a234')); // NaN

// js에서 string이 문자인지 확인하는 방법

// 1.isNaN()

console.log(isNaN('1234')); // false
console.log(isNaN('abcd')); // true

// 2.+ 연산자 활용

console.log(+'195'); // 195
console.log(+'boo'); // NaN

// 3.Number

console.log(Number('195')); // 195
console.log(Number('boo')); // NaN

// 4.정규 표현식

function isNumeric(val) {
  return /^-?\d+$/.test(val);
}

console.log(isNumeric('aaa')); // false
console.log(isNumeric('13579')); // true
console.log(isNumeric('-13')); // true
