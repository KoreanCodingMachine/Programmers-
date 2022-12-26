// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다

// 1단계 문제 풀면서 처음 막혔던 문제
/*
    우선 주어진 배열을 sort 함수를 이용해서 오름차순으로 정렬해야 하긴 하는데 
    n번째 인덱스를 기준으로 오름차순으로 정렬하라고 했으니 
    주어진 배열을 우선 오름차순으로 정렬하고 
    오름차순으로 정렬된 배열에서 n번째 인덱스를 비교해서 sort? 
*/

function solution(strings, n) {
  let answer = [];

  answer = strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;
    if (a[n] === b[n]) {
      if (a > b) return 1;
      if (a < b) return -1;
    }
  });
  return answer;
}

console.log(solution(['sun', 'bed', 'car'], 1));
console.log(solution(['abcd', 'abce', 'cdx'], 2));
