// const Peter = {

//     name : '김희찬',
//     age : 30,

// };

// Peter.job = '프로그래머';

// console.log(Peter);
// console.log(typeof Peter);


// 객체 지정 키워드를 const로 하면 객체에 값을 추가하면 const의 규칙에 위배가 되는게 아닌가 값이 변하면 안될텐데...이게 왜 될까.'


// const A = prompt("나이를 입력해주세요",);

// console.log(A);

// const a = 1;
// const b = "1";

// console.log(a===b);

/* 성인이고 혈액형이 O형이고 남자인 사람을 판별하는 코드를 짜보시오. */

// const Name ="김희찬"  // 전역변수 선언


// function FindAdult() {


//   let Adult = prompt("나이를 입럭하세요",);
//   let BloodType = prompt("혈액형을 입력하세요",);
//   let Gender = prompt("성별을 입력하세요",);

//   if(Adult >= 20 && BloodType == "O" && Gender == "남자"){
//     alert(`환영합니다 ${Name}님`);

//   }else{
//     alert(`당신은 ${Name}님이 아닙니다.`);
//   }

// }

// FindAdult();  // 함수 호출 

//2024-03-21 반복문 학습


/* for 문을 활용하여 1부터 10까지 콘솔로 찍어보자 */

// for(let i=0; i<11; i++) {
//     console.log(i);
// }

/* while 문을 활용하여 1부터 10까지 콘솔로 찍어보자 */

//  let i = 0;  //초기 전역변수 선언

// while(i<11) {

//     console.log(i)
//     i++

// }


/* Do while 문을 활용하여 1부터 10까지 콘솔로 찍어보자 */

// do {

//     console.log(i);
//     i++;

// } while(i<10)

/* Do while은 첫번째는 조건과 상관없이 무조건 실행된다 */



/* Break 활용 */

// while(true){

//     let answer = confirm('진행할껴?');
//     if(!answer) {
//         break;
//     }
// }

/* While문을 통화 짝수를 구하며 Continue 활용 */

// let i = 0;

// while(i<10){

//     i++;
//     if(i%2){
//         continue;

//     }

//     console.log(i);
// }

/* Do white 문 활용하여 짝수 출력 */

// let i = 0;

// do {
//     i++;
//     if(i%2) {
//         continue;
//     }
//     console.log(i)

// }while(i<10)

/* For 문을 활용하여 짝수 출력 */

// for(let i = 0; i<10 ; i++) {
    
//     if(i%2){

//         continue;
//     }
//     console.log(i);
// }

/* 알 수 있는건 For문은 0이 출력이 되고 While과 Do while은 0이 출력되지 않는다. 이유는 while 과 Do while은 i++ 를 진행을 먼저 하기에 0+1= 1, 즉 1부터 시작하기 때문이다. */
/* 반면에 For문은 반복을 진행 후 증감이 되기 때문에 0부터 출력이 된다. */

/* 사고 싶은 차를 물어보고 가격을 알려주는 Switch 문 */

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




