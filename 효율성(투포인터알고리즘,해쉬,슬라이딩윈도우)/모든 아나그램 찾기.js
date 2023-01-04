// S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하
// 세요. 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.

function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    // map1과 map2의 키가 다르거나 , map2의 key값과 val값이 다르면
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}
function solution(s, t) {
  let answer = 0;
  let sh = new Map();
  let th = new Map();

  // th 해쉬맵을 생성
  for (let x of t) {
    if (th.has(x)) {
      th.set(x, th.get(x) + 1);
    } else {
      th.set(x, 1);
    }
  }

  //   슬라이딩 윈도우 기법을 사용하기 위해서 rt에 t.length-1 까지만 원소를 추가하고
  // rt를 추가하면서 기존의 th와 sh 해쉬맵을 비교해간다.

  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sh.has(s[i])) {
      sh.set(s[i], sh.get(s[i]) + 1);
    } else {
      sh.set(s[i], 1);
    }
  }

  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    if (sh.has(s[rt])) {
      sh.set(s[rt], sh.get(s[rt]) + 1);
    } else {
      sh.set(s[rt], 1);
    }
    if (compareMaps(sh, th)) answer++;
    sh.set(s[lt], sh.get(s[lt]) - 1);
    if (sh.get(s[lt]) === 0) {
      sh.delete(s[lt]);
    }
    lt++;
  }

  return answer;
}

let a = 'bacaAacba';
let b = 'abc';
console.log(solution(a, b));
