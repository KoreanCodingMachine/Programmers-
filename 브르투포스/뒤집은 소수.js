// N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하
// 는 프로그램을 작성하세요. 예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출
// 력한다. 단 910를 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다.

// 1.소수인지 판별하는 함수를 만든다.
// 2.숫자를 뒤집고
// 3.뒤집은 숫자 앞에 0이 있다면 0을 버린다.

// 뒤집는 로직
// 각 숫자를 string으로 바꿔서 split()함수를 이용해 배열로 만들고 , reverse()를 이용해 역으로 바꾼다.

function isPrime(x) {
  let cnt = 0;

  for (let i = 1; i <= x; i++) {
    if (x % i === 0) {
      cnt++;
    }
  }

  if (cnt === 2) {
    return true;
  } else {
    return false;
  }
}

function solution(arr) {
  let answer = [];

  for (let x of arr) {
    let tmp;
    tmp = x.toString().split('').reverse().join('');
    if (isPrime(+tmp)) {
      answer.push(+tmp);
    }
  }

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
