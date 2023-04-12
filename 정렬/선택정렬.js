const arr = [5, 4, 1, 3, 2, 6];

// 1. 선택정렬을 이용해서 작은 순서대로 정렬

const sort = () => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    let minValue = arr[minIndex];
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < minValue) {
        minValue = arr[j];
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
};

console.log(sort());

// swap

const arr2 = [1, 2, 3, 4, 5];

[arr2[1], arr2[2]] = [arr2[2], arr2[1]];
