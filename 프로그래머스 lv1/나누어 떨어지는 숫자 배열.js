// divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수
// divisor로 나누어 떨어지는 배열이 없다면 -1을 반환한다.

function solution(arr, divisor) {
  let answer = [];
  let new_array = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      new_array.push(arr[i]);
    } else {
      continue;
    }
  }

  if (!new_array.length) {
    answer.push(-1);
    return answer;
  } else {
    new_array.sort((a, b) => {
      return a - b;
    });
  }

  return new_array;
}

console.log(solution([5, 7, 9, 10], 5));
console.log(solution([2, 36, 1, 3], 1));
console.log(solution([5, 7, 9, 10], 5));
