// 삽입정렬
// 좌항에 자신보다 작은 수가 나올때까지 우항으로 미는 정렬 -> 좌항이 자신보다 크다면 우항으로 밀어버림
// 좌항에 자신보다 작은 수가 나오면 삽입한다. -> 좌항이 자신보다 작다면 삽입

// 1.자기 자신을 기준으로 정렬해야 함으로 변수로 만듬 , (index,value)
// 2.while문을 순회하면서 자기 자신을 기준으로 좌항이 자기보다 크다면 오른쪽으로 밀어놓고 좌항이 자신보다 작다면 삽입한다.
const arr = [5, 4, 1, 3, 2, 6];

const sort = () => {
  for (let i = 1; i < arr.length; i++) {
    let selfIdx = i;
    let selfVal = arr[i];
    // 좌항이 자신보다 클때까지만 오른쪽으로 민다.
    while (selfIdx > 0 && arr[selfIdx - 1] > selfVal) {
      arr[selfIdx] = arr[selfIdx - 1];
      selfIdx--;
    }
    // 좌항이 자신보다 작다면 삽입한다.
    arr[selfIdx] = selfVal;
  }

  return arr;
};

console.log(sort());
