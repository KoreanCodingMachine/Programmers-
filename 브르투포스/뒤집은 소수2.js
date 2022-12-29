function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function solution(arr) {
  let answer = [];

  for (let x of arr) {
    let res = 0; // 뒤집은 값을 저장할 변수
    while (x) {
      let t = x % 10; // 10으로 나눈 나머지
      res = res * 10 + t; // 뒤집었을때 10단위로 커짐으로
      x = parseInt(x / 10);
    }
    if (isPrime(x)) answer.push(res);
  }

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
