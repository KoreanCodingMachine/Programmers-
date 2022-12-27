// number 배열이 주어졌을 때 3개의 원소의 갯수를 더해서 0이 되는 경우의수를 출력하는 solution 함수
// n개중 3개의 경우의 수를 뽑는 것만큼 배열을 순회하면서 , 뽑은 3개의 합이 0일때 answer++

function solution(number) {
  let answer = 0;

  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) answer++;
      }
    }
  }

  return answer;
}

console.log(solution([-2, 3, 0, 2, -5]));
console.log(solution([-3, -2, -1, 0, 1, 2, 3]));
console.log(solution([-1, 1, -1, 1]));
