// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때,
// 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

function solution(participant, completion) {
  const n = participant.length;
  let answer = '';

  participant.sort();
  completion.sort();

  console.log(participant);
  console.log(completion);

  for (let i = 0; i < n; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      return answer;
    }
  }
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']));
console.log(
  solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
);
