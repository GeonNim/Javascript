// 프로그래밍 언어에서 다루는 모든 데이터는 각자의 형태를 지닌다. 이를 타입이라 한다.
// 원시 타입 : string, number, boolean, undefined, null
// 객체 타입 : function, array, object

// 1. 문자열(string)
// '' 안에 작성되는 원시 값은 문자로 인식되고 이들의 나열이 문자열이다.
const wolde = 'hello';

// 문자는 홀따옴표와 겹따옴표 어떤 것을 사용해도 되나, 따옴표 안에 다른 따옴표가 들어간다면
const str = "i'am mashall" + ' pptp';

console.log(str);

// type을 체크할 때는 typeof() 메서드를 사용한다 - 문자뿐아닌 숫자등 모든 타입 체크 함
console.log(typeof str);

// 2. 탬플릿 리터럴
// - 변수와 문자열을 함께 사용할 때 es6 버전 부터는 + 기호 없이 편리하게 조합할 수 있는 방식을 제공한다. 이를 템플릿 리터릴 이라 한다
// - 전체 문자열을 백틱으로 감싸고, 변수 부분을 ${} 안에 작성한다
const classNmae = 'section';
const tags = '<section class="' + classNmae + '"><section/>';
console.log(tags);
const header = 'header';
const container = 'container';
const logo = 'logo';
// const tag2 =
//   '<div class="' +
//   header +
//   '"><div class="' +
//   container +
//   '"><div class="' +
//   logo +
//   '"></div></div></div>';
// console.log(tag2);
//↑↑↑ 탬플릿 리터널 없을시 + 를 이용해 조합 ↑↑↑ tag2 ↑↑↑ 처럼 사용
//↓↓↓ 현재는 아래처럼 탬플릿 리터널 사용
const tag2 = `
<div class="${header}">
    <div class="${container}">
      <div class="${logo}"></div>
    </div>
</div>
`;
console.log(tag2);

// 3. 숫자(number)
// 숫자는 따옴표 없이 사용하며, 말 그대로 숫자를 사용한다. 숫자 형태이므로 연산이 가능하다.
// 자바스크립트는 엔진이 타입을 추론하므로 별도의 선언문 없이 숫자, 문자, 객체 등의 타입을 지정할 수 있다.
// 따라서 소수를 작성해도 숫자 타입으로 지정된다.
const b = 4;
const c = 5.5;
console.log(typeof b, typeof c);
// 숫자를 작성할 때 따옴표 안에 작성하면 문자열로 변형된다.
// 숫자형 문자를 숫자형으로 변경할때 Number() 메서드를 사용한다. 이와 같이 변경하는 것을 명시적 형변환이라 한다.
const d = '5';
console.log(typeof d);
const e = Number(d);
console.log(typeof e);

// 숫자형 문자는 + 의 경우 문자 연산이 되지만 나머지 연산은 엔진이 숫자로 임의 변경하여 연산한다. 이를 암묵적 형변환이라 한다.
// 암묵적 형변환된 데이터는 숫자형으로 변경된다.
const f = 10;
const g = d + f;
console.log(g);
console.log(typeof g); //string으로 변환됨
// 4. NaN
// 자바스크립트 엔진이 숫자형으로 인식하는 것 중에 특이한 것은 NaN이다. 이는 Not a Number의 이니셜로 '숫자가 아님'이지만 숫자다.
console.log(typeof (f * 'a'));

// 5. Boolean
// 컴퓨터는 모든 데이터를 0과 1로 읽는다. 이를 이용하여 true와 false를 나타내는 방식을 표현하는데 이를 boolean이라 한다.
// George Boole이라는 수학자가 고안해서 붙여진 이름이다.
// 직접적으로 true와 false를 사용하는 경우도 있지만 대부분 한 로직이 여러가지 경우의 수에 따라 흐름을 달리할 때 사용한다.(로그인 했을때와 아닐때 등)
const h = true;
console.log(h);
console.log(typeof h);

// 6. undefined
// undefined 는 원시값(Primitive Type)으로, [선언한 후에 값을 할당하지 않은 변수나 값이 주어지지 않은 인수]에 자동으로 할당된다.
let i;
console.log(i);
// 7. null
// undefined와 같이 빈어있는 [값]이라는 의미는 같다. 다만 의도적으로 할당해야한다.
console.log(undefined == null); // == 값만 같으면 true

// 하지만 데이터의 타입은 undefined와 다르다.
console.log(undefined === null); // === 값과 타입까지 같아야 true

// null 역시 false, 0, 빈값과는 다르다.
console.log(undefined == false);
console.log(null == 0);
