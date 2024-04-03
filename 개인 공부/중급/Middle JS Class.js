/* 2024-04-02 공부일지  */

/* [변수] */

/* var는 한번 선언된 변수를 다시 선언할 수 있다.*/
/* [Example]*/

/* var name = 'Peter';
console.log(name);

var name = 'Paul';
console.log(name); */

/* var는 선언하기 전에 사용할 수 있다. */
/* [Example]*/

/* var name; 
console.log(name);  // undefined라고 콘솔에서 출력
name = 'mike'; // 선언은 호이스팅이 되지만 할당은 호이스팅이 되지 않는다.  
*/

/* let 과 const 는 var 와 달리 한번 선언된 변수를 다시 선언할 수 없다. */
/* [Example] */

/* let name1 = 'peter';
console.log(name1);

let name1 = 'peter';
console.log(name1); */

/* 이렇게 실행하면 'SyntaxError: Identifier 'name1' has already been declared' 라는 에러가 뜬다 */

/* let 과 const는 TDZ 영향을 받는다 */

/* console.log(name) // TDZ 영역
let name = 'peter'; //ReferenceError */

// 호이스팅은 스코프 단위로 이루어진다

/* let age = 30;

function showage() {
    console.log(age);
    let age = 20;


}

showage(); */

/* 변수의 생성과정 

1. 선언 단계
2. 초기화 단계
3. 할당 단계 

[var]

1. 선언 및 초기화 단계 // 초기화 : undefined를 할당 해주는 단계
2. 할당 단계 

[let]

1. 선언 단계
2. 초기화 단계
3. 할당 단계 

[const]

1. 선언 + 초기화 + 할당


*/

/* 
변수 호이스팅 
 */

/* 

var a;   // a 변수 선언
a = undefined; // 값 할당 
console.log(a); // undefinded
var a = 10;
console.log(a); 

*/

/* 스코프 */

/* 

var : 함수 스코프

let, const : 블록 스코프  


*/

// 함수 스코프

// var 는 함수 스코프이기 때문에 varScope() 함수에  var a ; 인 지역변수가 선언되어있고 값은 undefined로 초기화가 되어 있다. 이러한 과정을 호이스팅이라고 부른다.

// function varScope() {
//   var a ;
//   a = undefined;  /* 호이스팅이 일어난 것  */

//   if (true) {
//     var a = 10;
//   }
//   console.log(a);
// };

// varScope(); // 함수 호출 후 값 10을 확인

//블록 스코프

/* let 그리고 const는 블록 스코프이기 때문에 let x 와 x의 할당 된 값을 참조하지 못하기 때문에 에러가 뜨는 것을 확인 할 수 있다.*/

// function testBlockScope() {
//   let x ;
//   x = undefined;  /* 호이스팅 */

//   if (true) {
//     let x = 10;
//   }
//   console.log(x);
// }

// testBlockScope(); // 함수 호출 후 변수 x에 대해 참조하지 못하는 에러 발생



