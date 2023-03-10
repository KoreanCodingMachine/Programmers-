// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수

function solution(phone_number) {
  let answer = [];

  for (let i = 0; i < phone_number.length; i++) {
    if (i < phone_number.length - 4) {
      answer.push('*');
    } else {
      answer.push(phone_number[i]);
    }
  }

  return answer.join('');
}

console.log(solution('01033334444'));

const str = '12345';
str[2].replace('*');
console.log(str);
