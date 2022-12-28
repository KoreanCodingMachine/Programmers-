function solution(d, budget) {
  let answer = 0;
  let d_sum = 0;
  let sum = 0;

  d.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < d.length; i++) {
    d_sum += d[i];
  }

  if (d_sum <= budget) {
    return (answer = d.length);
  } else {
    for (let i = 0; i < d.length; i++) {
      sum += d[i];

      if (sum <= budget) {
        continue;
      } else {
        return (answer = i);
      }
    }
  }

  return answer;
}

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));
