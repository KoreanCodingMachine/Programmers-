// JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다.
//  단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
// 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

function solution(s) {
  var answer = '';
  const a = s.split(' ');
  let pattern2 = /[a-zA-Z]/; //영어
  for (let i = 0; i < a.length; i++) {
    if (!pattern2.test(a[i][0])) {
      a[i] = a[i].toLowerCase();
    } else {
      //   a[i][0] = a[i][0].toUpperCase();
      //   console.log(a[i][0]);

      let first = a[i].charAt(0);
      let others = a[i].slice(1);

      a[i] = first.toUpperCase() + others.toLowerCase();
    }
  }
  answer = a.join(' ');
  return answer;
}

console.log(solution('3people unFollowed me'));
console.log(solution('for the last week'));
