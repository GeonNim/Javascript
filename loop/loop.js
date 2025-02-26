// 반복문은 수없이 반복되는 데이터들을 다룰 수 있는 프로그래밍의 중요한 문법이다.
// 반복문은 주로 배열의 요소나 DOM에서 선택된 반복 객체 등을 다룰때 사용된다. //ppt 자바스크립트 초반부 참조

const arr = [1, 2, 3, 'a', 'b', 'c', { name: 'marshall' }];

// 1. for in
// signiture : for(const loop variable in array or object){}
// for in문은 배열의 반복 인덱스를 리턴하고, 해당 배열의 인덱스 요소값을 배열접근 방식으로 리턴할 수 있다.
for (const a in arr) {
  console.log(arr[a]);
}

// 2. for of
// signiture : for(const loop variable of array or object){}
// for in문과 다르게 for of문의 경우 변수에 할달된 데이터를 인덱스가 아니라 해당 인덱스이 값을 직접 리턴한다.

for (const b of arr) {
  console.log(b);
}

// for in과 for of는 실제로 자주 사용되는 문법은 아니다. 이보다는 주로 for문이 많이 사용된다. 단, 파이썬에서는 for in을 자주 사용하므로 중요, 이보다는 주로 for문이 많이 사용된다.

// 3. for
// signiture : for(let loop variable; loop length; increment operator){}
// for문의 경우 반복 횟수를 지정할 수 있어서 디데일한 컨트롤이 가능하다.
// for문의 반복 변수를 재할당되기 때문에 const 상수를 선언하면 안된다.
const d = [1, 2, 3];
let s = 0;
for (let e = 0; e < d.length; e++) {
  s += d[e];
}
console.log(s);

let sum = 0;
for (let f = 1; f <= 100; f++) {
  sum += f;
}
console.log(sum);
// 중첩 for문
for (let f = 2; f <= 9; f++) {
  console.log(f + '단');
  for (let g = 1; g <= 9; g++) {
    console.log(f + '*' + g + '=' + f * g);
  }
}
