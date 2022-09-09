// 1~100까지 더하는 for 문을 만들고 결과를 출력하기
// 1~100까지 홀수만 출력하기
// 1~50까지  369 결과를 출력하기
// 주어진 숫자가 소수이면 true, 아니면 false를 출력하기

let result = 0;
for (let i = 1; i <= 100; i++) {
  result += i;
}
console.log(result);

let a = [];
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 1) {
    a.push(i);
  }
}
console.log(a);

let num = [];
for (let i = 1; i <= 50; i++) {}
console.log(i);
