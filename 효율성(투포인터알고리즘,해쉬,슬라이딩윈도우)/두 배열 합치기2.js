function solution(arr1, arr2) {
  let answer = [];

  let n = arr1.length;
  let m = arr2.length;

  //   포인터 2개 초기화
  let p1 = 0;
  let p2 = 0;

  // 둘 포인터중 하나가 모두 탐색했을 때
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) {
      //   p1이 가리키는 값을 push하고 ++
      answer.push(arr1[p1++]);
    } else {
      answer.push(arr2[p2++]);
    }
  }

  //   둘 중에 한 배열의 탐색을 완료 했을 때
  while (p1 < n) {
    answer.push(arr1[p1++]);
  }
  while (p2 < m) {
    answer.push(arr2[p2++]);
  }

  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
