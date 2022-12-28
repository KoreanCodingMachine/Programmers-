// 길이가 n인 배열을 하나 만들어 두고 1로 초기화 시킨다.
// 잃어버린 사람의 경우 lost_array의 값을 0으로 만든다.
// reserve 배열만큼 돌면서 만약 lost_array의 값이 0인 배열과 reserve 배열의 값 차이가 1 or -1이면 lost_array의 값을 1로 바꾼다.

function solution(n, lost, reserve) {
  let answer = 0;
  let result = new Array(n).fill(1);

  for (let i = 0; i < lost.length; i++) {
    result[lost[i] - 1] -= 1;
  }

  console.log(result);

  for (let i = 0; i < reserve.length; i++) {
    result[reserve[i] - 1] += 1;
  }

  console.log(result);

  for (let i = 0; i < n - 1; i++) {
    if (
      (result[i] === 0 && result[i + 1] === 2) ||
      (result[i] === 2 && result[i + 1] === 0)
    ) {
      result[i] = 1;
      result[i + 1] = 1;
    }
  }

  for (let i = 0; i < n; i++) {
    if (result[i] >= 1) {
      answer += 1;
    }
  }
  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));

// console.log(solution(5, [2, 4], [3]));
