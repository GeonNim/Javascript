// 조건문은 프로그램의 흐름을 변경할 때 사용된다. 특정 조건에 따라 흐름이 분기되는데, 해당 조건은 boolean 타입으로 지정된다.

// 1. signiture : if(condition){true logic} else {false logic}
// 조건은 boolean 타입이 리턴되기 때문에 비교 연산이나 논리 연산의 값을 사용한다.

if (true) {
  console.log('ture');
} else {
  console.log('false');
}

const a = 3;
const b = 3;
const c = 5;

if (a > 1) {
  console.log('ture');
} else {
  console.log('false');
}

if (a === b || b === c) {
  console.log('ture');
} else {
  console.log('false');
}

// 2. 중첩 if 조건문

const date = new Date(); // 현재 시간을 가져온다.
console.log(date);
const hour = date.getHours();
console.log(hour);

if (hour > 12) {
  console.log('오후입니다.');
} else {
  // console.log('오전입니다.');

  if (hour > 6 && hour <= 9) {
    console.log('아침입니다.');
  } else {
    console.log('점심입니다.');
  }
}
// const idArr = ['admin', 'manager', 'marshall', 'ssamjang'];
// const passArr = ['1234', '2345', '3456', '4567'];

// const id = 'marshall';
// const pass = '2345';

// console.log(idArr.includes(id));
// if (!idArr.includes(id)) {
//   console.log('아이디가 존재하지 않습니다.');
// } else {
//   if (!passArr.includes(pass)) {
//     console.log('비밀번호가 틀렸습니다.');
//   } else {
//     console.log(`${id}님 환영합니다.`);
//   }

// 3. if else if 조건문
// if(condition){} else if(condition) {} ... else {}

if (hour >= 6 && hour < 12) {
  console.log('오전입니다.');
} else if (hour >= 12 && hour < 18) {
  console.log('오후입니다');
} else {
  console.log('밤입니다.');
}
const idArr = ['admin', 'manager', 'marshall', 'ssamjang'];
const passArr = ['1234', '2345', '3456', '4567'];

console.log(idArr.includes('admin'));

// 중첩 if 예시 : id가 있으면 password 확인 후 '아이디'님 환영합니다. 메시지 콘솔에 출력 아이디와 패스워드가 없으면 없다는 메시지 콘솔에 각각 출력

const id = 'admin';
const password = '1234';

if (idArr.includes(id)) {
  if (passArr.includes(password)) {
    console.log(`${id}님 환영합니다.`);
  } else {
    console.log('패스워드가 틀렸습니다.');
  }
} else {
  console.log('아이디가 틀렸습니다.');
}

// 4. switch 조건문
// switch 조건문은 조건식이 true일 경우 조건식 각각의 상황을 분개한다.
// signiture : switch(condition){case : true logic}
// 특정 조건이 true일 때 그 이하는 실행을 멈춰야 한다. 이때 break를 만들어준다.

const value = 1;

switch (value) {
  case 0:
    console.log('0입니다.');
    break;
  case 1:
    console.log('1입니다.');
    break;

  case 2:
    console.log('2입니다.');
    break;

  default:
    console.log(`2 이상의 수 입니다.`);
}

// 띠 계산기
// console.log(2024 % 12);
// const inputYear = prompt();
// const year = Number(inputYear);
// console.log(typeof year);
let result = '';
// switch (year % 12) {
//   case 0:
//     result = '원숭이띠';
//     break;
//   case 1:
//     result = '닭띠';
//     break;
//   case 2:
//     result = '개띠';
//     break;
//   case 3:
//     result = '돼지띠';
//     break;
//   case 4:
//     result = '쥐띠';
//     break;
//   case 5:
//     result = '소띠';
//     break;
//   case 6:
//     result = '호랑이띠';
//     break;
//   case 7:
//     result = '토끼띠';
//     break;
//   case 8:
//     result = '용띠';
//     break;
//   case 9:
//     result = '뱀띠';
//     break;
//   case 10:
//     result = '말띠';
//     break;
//   case 11:
//     result = '양띠';
//     break;
//   default:
//     result = '?';
// }
// document.write(`당신은 ${result}입니다.`);

// 5. 삼항 연산자
// 삼항 연산자는 조건에 따른 로직이 단일하거나 짧을 때 사용된다.
// signiture : true ? true data : false data
// 삼항 연산자는 일급객체로 변수로 할당할 수 있다.
const age = 29;
const checkAge = age > 19;

if (checkAge) {
  console.log('성년입니다.');
} else {
  console.log('미성년입니다.');
}

const isAdult = checkAge ? '성년입니다.' : '미성년입니다.';
console.log(isAdult);
