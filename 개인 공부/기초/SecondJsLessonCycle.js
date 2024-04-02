/* 
const Peter = {

    name : '김희찬',
    age : 30,

};

Peter.job = '프로그래머';

console.log(Peter);
console.log(typeof Peter); 

*/

/* 객체 지정 키워드를 const로 하면 객체에 값을 추가하면 const의 규칙에 위배가 되는게 아닌가 값이 변하면 안될텐데...이게 왜 될까.' */

/*
const A = prompt("나이를 입력해주세요",);

console.log(A);

const a = 1;
const b = "1";

console.log(a===b); 

*/

/* 성인이고 혈액형이 O형이고 남자인 사람을 판별하는 코드를 짜보시오. */

/* 

const Name ="김희찬"  // 전역변수 선언

let FindAdult = function() {

  let Adult = prompt("나이를 입럭하세요",);
  let BloodType = prompt("혈액형을 입력하세요",);
  let Gender = prompt("성별을 입력하세요",);

  if(Adult >= 20 && BloodType == "O" && Gender == "남자"){
    alert(`환영합니다 ${Name}님`);

  }else{
    alert(`당신은 ${Name}님이 아닙니다.`);
  }

}

FindAdult();  // 함수 호출

 */

/* 2024-03-21 반복문 학습 */

/* for 문을 활용하여 1부터 10까지 콘솔로 찍어보자 */

/*
 for(let i=0; i<11; i++) {
    console.log(i);
} 
*/

/* while 문을 활용하여 1부터 10까지 콘솔로 찍어보자 */

/*  let i = 0;  //초기 전역변수 선언

while(i<11) {

    console.log(i)
    i++

} */

/* Do while 문을 활용하여 1부터 10까지 콘솔로 찍어보자 */

/* 

do {

    console.log(i);
    i++;

} while(i<10) 

*/

/* Do while은 첫번째는 조건과 상관없이 무조건 실행된다 */

/* Break 활용 */

/* 

while(true){

    let answer = confirm('진행할껴?');
    if(!answer) {
        break;
    }
} 

*/

/* While문을 통화 짝수를 구하며 Continue 활용 */

/* 

let i = 0;

while(i<10){

    i++;
    if(i%2){
        continue;

    }

    console.log(i);
} 

*/

/* Do white 문 활용하여 짝수 출력 */

/* 

let i = 0;

do {
    i++;
    if(i%2) {
        continue;
    }
    console.log(i)

}while(i<10) 

*/

/* For 문을 활용하여 짝수 출력 */

/* 

for(let i = 0; i<10 ; i++) {

    if(i%2){

        continue;
    }
    console.log(i);
} 

*/

/* 알 수 있는건 For문은 0이 출력이 되고 While과 Do while은 0이 출력되지 않는다. 이유는 while 과 Do while은 i++ 를 진행을 먼저 하기에 0+1= 1, 즉 1부터 시작하기 때문이다. */
/* 반면에 For문은 반복을 진행 후 증감이 되기 때문에 0부터 출력이 된다. */

/* 사고 싶은 차를 물어보고 가격을 알려주는 Switch 문 */

/*

let car = prompt('무슨 차를 사고 싶나요?');

switch(car) {
    case '투싼' :
        alert('200만원입니다.');
        break;
    case '모닝' :
        alert('500만원');
        break;
    case '제네시스' :
        alert('5000만원');
        break ;
    case '싼타페' :
        alert('1000만원');
        break ;
    default :
        alert('그런 자동차는 없습니다');

} 

*/

/* 함수 표현식 && 화살표 함수  */

/* 기본 함수 */

/* 

let somefunction = function(num1,num2) {

    const sum = Number(num1) + Number(num2)
    alert(sum);

}

let result = prompt('숫자를 입력하세요',);
let result2 = prompt(`다음 숫자를 입력하세요`);

somefunction(result,result2); 

*/

/* 화살표 함수 */

/* 

let arrowfunction = (num1,num2) => {

    const sum = Number(num1) + Number(num2);
    alert(sum);

}

let result3 = prompt('숫자를 입력해주세요', );
let result4 = prompt('다음 숫자를 입력해주세요', );

arrowfunction(result3,result4);

 */

/* 
화살표 함수는 코드 본문이 한 줄이고 리턴문이 있다면 중괄호 대신 일반괄호로 바꿀 수 있다.
리턴문이 한 줄 일 경우 괄호 또한 생략 가능.
인수가 하나라면 인수의 괄호 또한 생략 가능.
인수가 없는 함수는 인수의 괄호를 생략 할 수 없다.
리턴 전에 여러 줄의 코드가 있을 경우 일반괄호를 사용할 수 없다.
 */

/* 객체 */

/* let makeAge = function(name,age) {
    return {
        name: name,
        age: age,
        job: 'programer',

    };


}
*/

/* const Mike = makeAge('Mike',20);
console.log(Mike);


function isAdult(user){
    if(user.age < 20){
        return false
    }
    return true

} */

/* const Mike = {
    name: 'Mike',
    age : 20
};

const Jane = {
    name: 'Jane',
    age : 25
};

console.log(isAdult(Mike));
console.log(isAdult(Jane)); */

/* 객체 for ... in문  */

/* 

const Mike = {
    name  : 'mike',
    age :20,

};

for(x in Mike) {
    console.log(Mike[x]);
} 

*/

/* 생성자 함수 : 상품 객체를 생성 */

/* function Item(title, price) {

    this.title = title;
    this.price = price;
    this.showPrice = function () {
        console.log(`가격은 ${price}원 입니다.`);
    };



}

const Item2 = new Item("가방", 3000);
const Item1 = new Item("신발", 4000);
const Item3 = new Item("지갑", 5000);

console.log(Item1,Item2,Item3);

Item3.showPrice();
 */

