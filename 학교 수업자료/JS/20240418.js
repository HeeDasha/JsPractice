/* 2024-04-18 JS 수업 */

//두 수의 합을 구하는 함수 구현 (Prompt로 값을 받기)

function sumResult(num1,num2) {

let result = num1+num2;
return result;

}

let a = parseInt(prompt('첫번째 숫자를 입력해주세요'));
let b = parseInt(prompt('두번째 숫자를 입력해주세요'));


document.getElementById('result1').innerText =`두 수의 합은 ${sumResult(a,b)} 입니다.`;

