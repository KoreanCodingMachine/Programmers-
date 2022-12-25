// 가운데 글자를 반환하는 solution 함수를 만들어라
// 홀수일때는 가운데 글자 , 짝수이면 가운데 두 글자

function solution(s) {
  let answer = '';
  let length = Math.floor(s.length / 2);

  // 글자의 길이가 홀수이면
  if (s.length % 2 === 1) {
    answer = s[length];
  } else {
    answer = s[length - 1] + s[length];
  }

  return answer;
}

console.log(solution('abcde'));
console.log(solution('qwer'));

//---------------------------------------------------------------------

// 홀수인지 짝수인지 판별하는 함수
function isOdd(s) {
  if (s.length % 2 === 1) {
    return true;
  } else {
    return false;
  }
}

function isEvenMiddle(s) {
  const arr = s.split('');
  const num = arr.length;
  const middle = num / 2;

  return middle;
}

function isOddMiddle(s) {
  const arr = s.split('');
  const num = arr.length;
  const middle = num / 2 - 0.5;

  return middle;
}

function solutionss(s) {
  const arr = s.split('');

  if (isOdd(s)) {
    return arr[isOddMiddle(s)];
  } else {
    return arr[isEvenMiddle(s) - 1] + arr[isEvenMiddle(s)];
  }
}

console.log(solutionss('ahde'));
