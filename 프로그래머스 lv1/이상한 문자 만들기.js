// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// split 함수를 이용해서 문장을 단어별로 자르고
// 단어별로 인덱스를 조건에 맞게 판별해서 정렬하고
// join 함수로 다시 엮는다.

function solution(s) {
  let x = s.split(' ');
  let answer = [];

  for (let i = 0; i < x.length; i++) {
    answer.push(
      x[i]
        .split('')
        .map((cur, index) =>
          index % 2 ? cur.toLowerCase() : cur.toUpperCase()
        )
        .join('')
    );
  }
  console.log(answer);
  return answer.join(' ');
}

console.log(solution('try hello world'));
