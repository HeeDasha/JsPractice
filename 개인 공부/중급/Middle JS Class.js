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

/* const age = 30;

if(age>19) {
    const txt = '성인'
}
console.log(txt); */

/* 2024-04-05 생성자 함수  */

/* 여러 객체가 필요할 때 사용하는 함수가 생성자 함수이다. */ 


/* function User(name,age) { //특징은 첫 글자는 대문자로 설정해줘야한다. 

    this.name = name;
    this.age = age;

}

let user1 = new User('Mike',30);
let user2 = new User('Peter',40);
let user3 = new User('Paul',20);

console.log(user1);
console.log(user2);
console.log(user3); */

// 2024-04-07 객체 및 method, this 확실히 공부하기 


/* const peter = {

    name : '김희찬',
    age : 20,
    fly(){                      //객체 프로퍼티에 할당 된 함수 를 '메소드'라고 한다 
        console.log('날아간당');
    }

}

console.log(peter.fly); */

const user = {
    name : '선영',
    age : 20,
    fly() {
        console.log(`안녕하세요 저는 ${this.name} 입니다.`);
        return true;
    }

}

console.log(user.fly())
