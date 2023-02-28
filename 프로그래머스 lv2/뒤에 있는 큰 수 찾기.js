// 정수로 이루어진 배열 numbers가 있습니다. 배열 의 각 원소들에 대해 자신보다 뒤에 있는 숫자 중에서 자신보다 크면서
// 가장 가까이 있는 수를 뒷 큰수라고 합니다.
// 정수 배열 numbers가 매개변수로 주어질 때, 모든 원소에 대한 뒷 큰수들을 차례로 담은 배열을 return 하도록
//  solution 함수를 완성해주세요. 단, 뒷 큰수가 존재하지 않는 원소는 -1을 담습니다.

// 접근 방법
// 배열을 정렬해서  가장 큰 수를 저장할 변수를 하나 만들어서 그 수는 -1로 대체함

// 런타임 에러 -> 시간복잡도 초과
function solution(numbers) {
  var answer = [];

  let max = Math.max(...numbers); // 9

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i; j < numbers.length; j++) {
      if (numbers[i] === max) {
        answer.push(-1);
        break;
      }

      if (numbers[i] < numbers[j]) {
        answer.push(numbers[j]);
        break;
      }

      if (j === numbers.length - 1) {
        answer.push(-1);
        break;
      }
    }
  }
  return answer;
}

// stack
// 코드는 이해 완료

function solution(numbers) {
  const answer = Array(numbers.length).fill(-1);
  const stack = [];

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length && numbers[stack.at(-1)] < numbers[i]) {
      answer[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }
  return answer;
}

console.log(solution([2, 3, 3, 5]));
console.log(solution([9, 1, 5, 3, 6, 2]));

// Array.prototype.at 메서드 -> 매개변수로 인덱스 번호 -> 해당하는 인덱스의 값을 리턴함
// 음수 매개변수로 뒤에서부터 접근할 때 유용함
// const array = [1, 2, 3, 4, 5];
// console.log(array.at(0)); // 1
// console.log(array.at(3)); // 4
// console.log(array.at(-1)); // 5
// console.log(array.at(-2)); // 4
