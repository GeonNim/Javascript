// 1. 산술 연산자
// 산술 연산자는 +, -, *, /의 사칙 연산이 있다.
// 문자열의 경우 + 연산을 가능하나 결과는 문자의 조합니다.
const a = 3;
const b = 6;

console.log(a / b);

const c = 'java';
const d = 'script';

console.log(c + d);

// 숫자형 문자열의 경우 + 연산은 문자 조합이지만 그 외 연산은 자동 변환(암묵적 변환)된다.

const e = '3';
const f = 6;
console.log(e + f);

// 각 연산자는 우선순위가 있으며, 우선순위를 피하기 위해 먼저 연산될 부분을 ()로 감싼다.
// 연산자 우선순위 참조 : https://velog.io/@bami/Javascript-%EC%97%B0%EC%82%B0%EC%9E%90-%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84
const g = 5 + 3 * 2;
console.log(g);

// 2. 나머지 연산자(%)
// 나머지 연산자는 두 수를 나눈 나머지 값을 반환한다.
const h = 7;
const i = 5;
console.log(h % i);

function isODD(num) {
  if (num % 2 == 0) {
    console.log(num + '은 짝수입니다<br/>');
  }

  if (num % 2 == 1) {
    console.log(num + '은 홀수입니다.');
  }
}
isODD(50);
// 두 숫자 중 앞의 숫자가 작으면 앞의 숫자와 뒤의 숫자가 같아지기 이전까지 앞의 숫자를 반환한다.
// 두 숫자가 같아지면 나눈 값이 0이므로 0을 반환한다.
const j = 7;
const k = 9;
console.log(j % k);

// 3. 비교 연산자
// 비교 연산자는 boolean 타입을 리턴한다.

// 4 부정 연산자
// 비교 연산자 또는 boolean타입 앞에 ! 문자를 사용하면 true와 false가 반대로 리턴된다.

// 5. 논리 연산자
// && : 합성곱(and) - 좌우의 모든 항이 true일때 true 리턴
// || : 합성합(or) - 좌우 중 한 항만 true면 true 리턴

// 6. 복합 대입 연산자
// += : 기본 변수의 값에 값을 더한다. 나머지 연산자도 마찬가지다(-=, *=, /=)
