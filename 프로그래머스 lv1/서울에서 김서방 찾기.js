// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요.
// seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

// indexOf 메서드를 이용해서 kim이라는 글자가 있을때 해당 index를 return

function solution(seoul) {
  let answer = '';

  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i].includes('Kim')) {
      answer = `김서방은 ${i}에 있다`;
    }
  }

  return answer;
}

console.log(solution(['jane', 'kim']));
