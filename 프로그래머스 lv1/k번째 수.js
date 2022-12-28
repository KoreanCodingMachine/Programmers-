//배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

// array.slice(i,j+1)를 이용해서 배열을 자르고
// array.sort()를 이용해 주어진 배열을 정렬하고
// sort()한 배열의 k번째 있는 원소를 반환한다.

function solution(array, commands) {
  let answer = [];

  for (let i = 0; i < commands.length; i++) {
    let new_array = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a, b) => a - b);

    answer.push(new_array[commands[i][2] - 1]);
  }

  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
