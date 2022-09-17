// 1~100까지 더하는 for 문을 만들고 결과를 출력하기
let result = 0;
for (let i = 1; i <= 100; i++) {
  result += i;
}
console.log(result);

// 1~100까지 홀수만 출력하기
let a = [];
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 1) {
    a.push(i);
  }
}
console.log(a);

// 1~50까지  369 결과를 출력하기
let num = [];
for (let i = 1; i <= 50; i++) {}
console.log(i);

// 주어진 숫자가 소수이면 true, 아니면 false를 출력하기
// 자기 자신, 1 외에 나눠지는 수가 있으면 false
// 2부터 자기자신까지 나누기
function num(n) {
  let primeNum = [];
  for (let i = 1; i <= n; i++) {
    n % i == 0 ? primeNum.push(i) : null;
  }
  return primeNum.length == 2 ? true : false;
}
console.log(num(1));
