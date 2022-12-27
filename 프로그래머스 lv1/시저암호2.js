function solution(s, n) {
  return s
    .split('')
    .map((value) => {
      if (value === ' ') return value;
      return value.toUpperCase().charCodeAt() + n > 90
        ? String.fromCharCode(value.charCodeAt() + n - 26)
        : String.fromCharCode(value.charCodeAt() + n);
    })
    .join('');
}

console.log(solution('AB', 1)); // BC
console.log(solution('z', 1)); // a
console.log(solution('a B z', 4)); // e F d
