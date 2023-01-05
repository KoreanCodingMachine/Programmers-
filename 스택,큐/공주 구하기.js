function solution(n, k) {
  let answer;
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  while (queue.length) {
    for (let i = 1; i < k; i++) {
      queue.push(queue.shift());
    }
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }

  return answer;
}

console.log(solution(8, 3));

// const array1 = [1, 2, 3];

// const firstElement = array1.shift();

// console.log(array1);
// // expected output: Array [2, 3]

// console.log(firstElement);

// const array2 = [1, 2, 3];

// const secondElement = array2.unshift(4, 5);

// console.log(array2); // [ 4, 5, 1, 2, 3 ]
// console.log(secondElement); // 5
