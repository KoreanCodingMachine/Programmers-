function solution(answers) {
  let answer = [];

  const num1 = [1, 2, 3, 4, 5]; // 5
  const num2 = [2, 1, 2, 3, 2, 4, 2, 5]; // 8
  const num3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // 10

  let score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === num1[i % num1.length]) score[0]++;
    if (answers[i] === num2[i % num2.length]) score[1]++;
    if (answers[i] === num3[i % num3.length]) score[2]++;
  }

  const max = Math.max(...score);
  for (let i = 0; i < score.length; i++) {
    if (max === score[i]) answer.push(i + 1);
  }

  return answer;
}
