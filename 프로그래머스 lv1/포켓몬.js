/*
임의의 배열 nums가 주어질때 
n/2개 를 가져갈 수 있는데 이때 가장 많은 종류를 가져갈 수 있는 경우의 수를 return하는 함수를 만들어라 


*/

function solution(nums) {
  let answer = 0;
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    if (!arr.includes(nums[i])) {
      arr.push(nums[i]);
    } else {
      continue;
    }
  }

  if (arr.length >= nums.length / 2) {
    answer = nums.length / 2;
  } else {
    answer = arr.length;
  }
  console.log(arr);

  return answer;
}

console.log(solution([1, 2, 3, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
