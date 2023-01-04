// 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램
// 을 작성하세요

// 1.sort() 함수로 해결

function solution(arr1, arr2) {
  let answer = [];

  arr1.push(arr2);
  const new_arr = arr1.flat(1);
  new_arr.sort((a, b) => a - b);

  answer.push(new_arr);

  return answer.flat();
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
