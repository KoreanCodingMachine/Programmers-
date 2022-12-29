function solution(m, product) {
  let answer = 0;

  let n = product.length;

  // 비용이 작은 순서대로 정렬한다.
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < n; i++) {
    let money = m - product[i][0] / 2 + product[i][1];
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      if (j !== 1 && product[j][0] + product[j][1] > money) break;
      if (j !== i && product[j][0] + product[j][i] <= money) {
        money -= product[j][0] + product[j][i];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }

  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
