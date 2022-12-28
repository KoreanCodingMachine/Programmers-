// 지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 "공백"(" ") 또는 "벽"("#") 두 종류로 이루어져 있다.
// 전체 지도는 두 장의 지도를 겹쳐서 얻을 수 있다.
// 각각 "지도 1"과 "지도 2"라고 하자. 지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다.
//  지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.
// "지도 1"과 "지도 2"는 각각 정수 배열로 암호화되어 있다.
// 암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1, 공백 부분을 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다.

// 10진수 -> 2진수 변환  (toString(2))
// 입력된 n에 맞게 2진수로 변환해야함 , 변환을 하고 값이 출력되지 않은 부분은 0으로 채운다.
// 0으로 채운 값을 2차원 배열로 각각의 arr1,arr2에 저장하고
// 2중 for문으로 두 값의 인덱스를 비교해서 최종 answer를 도출함

function makeDecArray(arr, n) {
  for (let i = 0; i < n; i++) {
    arr[i] = arr[i].toString(2);
    if (arr[i].length !== n) {
      let dif = n - arr[i].length;
      let array = arr[i].split('');
      for (let i = 0; i < dif; i++) {
        array.unshift(0);
      }
      arr[i] = array.join('');
    }
  }
  return arr;
}

function solution(n, arr1, arr2) {
  let answer = [];

  makeDecArray(arr1, n);
  makeDecArray(arr2, n);

  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n; j++) {
      if (arr1[i][j] === '1' || arr2[i][j] === '1') {
        str += '#';
      } else {
        str += ' ';
      }
    }
    answer.push(str);
  }

  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
