// 0~9까지 숫자로 이루어진 배열 중에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하는 함수 만들기

// splice는 배열 원본 자체를 건드리고 , slice는 배열의 원본은 수정하지 않는다.

const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5];
const fruits = ['banana', 'apple', 'mango', 'hodu'];

const result1 = array1.slice(0, 3); // 0번 부터 3-1번 인덱스까지 삭제하겠다.
console.log('result1', result1); // [1,2,3]
console.log(array1); // [1,2,3,4,5] , 원본 배열을 수정하지 않는다.

const result2 = array2.splice(0, 1); // 0번 인덱스부터 1개 지우겠다. 즉 0번 인덱스 삭제
console.log('result2', result2); // [1]
console.log(array2); // [2,3,4,5] , 원본 인덱스의 수정

const result3 = fruits.slice(1, 3);
console.log(result3); // ['apple','mango']
console.log(fruits.splice(1, 1)); // ['apple']

function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      //   arr.slice(i, 1);
      continue;
    } else {
      answer.push(arr[i]);
    }
  }

  console.log(answer);
  return answer;
}

console.log(solution([4, 4, 4, 3, 3]));
console.log(solution([1, 1, 3, 3, 0, 1, 1]));
