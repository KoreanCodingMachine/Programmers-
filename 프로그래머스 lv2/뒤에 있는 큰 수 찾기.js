// 정수로 이루어진 배열 numbers가 있습니다. 배열 의 각 원소들에 대해 자신보다 뒤에 있는 숫자 중에서 자신보다 크면서
// 가장 가까이 있는 수를 뒷 큰수라고 합니다.
// 정수 배열 numbers가 매개변수로 주어질 때, 모든 원소에 대한 뒷 큰수들을 차례로 담은 배열을 return 하도록
//  solution 함수를 완성해주세요. 단, 뒷 큰수가 존재하지 않는 원소는 -1을 담습니다.

// 접근 방법
// 배열을 정렬해서  가장 큰 수를 저장할 변수를 하나 만들어서 그 수는 -1로 대체함

function solution(numbers) {
  var answer = [];

  let max = Math.max(...numbers); // 9
  let sort = numbers.sort((a, b) => a - b); // [-1,2,3,5,6,9]

  return answer;
}

console.log(solution([2, 3, 3, 5]));
console.log(solution([9, 1, 5, 3, 6, 2]));
