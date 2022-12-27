// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
// 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다.
// 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// split 함수를 이용해서 배열로 만들고 , 각각의 문자에 + n 만큼 해주면 될것 같다.

//str.charCodeAt(index) : 문자를 아스키코드로 변환시켜 주는 메서드

//String.charCodeAt(index) : 아스키코드를 문자로 변환시켜 주는 메서드.
//String의 정적 매서드이기 떄문에 String.fromCharCode() 이렇게 Stirng을 반드시 붙여서 써야한다.

function solution(s, n) {
  let answer = '';

  answer = s
    .split('')
    .map((value) => {
      if (value === ' ') return value;

      if (value.toUpperCase().charCodeAt() + n > 90) {
        return String.fromCharCode(value.charCodeAt() + n - 26);
      } else {
        return String.fromCharCode(value.charCodeAt() + n);
      }
    })
    .join('');

  return answer;
}

console.log(solution('AB', 1)); // BC
console.log(solution('z', 1)); // a
console.log(solution('a B z', 4)); // e F d

// console.log('a'.charCodeAt()); // 97
// console.log('z'.charCodeAt()); // 122
// console.log('A'.charCodeAt()); // 65
// console.log('Z'.charCodeAt()); // 90
