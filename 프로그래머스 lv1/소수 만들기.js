// 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다.
// 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때
// 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

function isPrime(x) {
  let cnt = 0;

  for (let i = 1; i <= x; i++) {
    if (x % i === 0) {
      cnt++;
    }
  }

  if (cnt === 2) {
    return true;
  } else {
    return false;
  }
}

function solution(nums) {
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) {
          answer++;
        } else {
          continue;
        }
      }
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 7, 6, 4]));
