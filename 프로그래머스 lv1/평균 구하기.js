// 정수를 담고있는 배열 arr의 평균값을 return하는 함수

function solution(arr) {
  let answer = 0;

  arr.map((value, index) => {
    answer += value;
  });

  return answer / arr.length;
}

console.log(solution([1, 2, 3, 4]));
