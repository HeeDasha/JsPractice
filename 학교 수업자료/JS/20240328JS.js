/* 2024-03-28 JS 수업  */

//prompt로 부여받은 학점을 if문으로 학점 등급을 정해주기

let score = prompt('학생의 점수를 입력해주세요', 100);
let grade;

if (score >= 90) {
    grade = 'A'
}
else if (score >= 80) {
    grade = 'B'
}
else if (score >= 70) {
    grade = 'C'

}
else if (score >= 60) {
    grade = 'D'

}
else {
    grade = 'F'
}


document.getElementById('result').innerText = `학생의 점수는 ${score}이며 ${grade}입니다.`;

/* innerHTML: 요소의 내부 HTML을 변경합니다. 즉, HTML 태그를 포함한 문자열을 직접 대입할 수 있습니다. 이 방법은 HTML을 변경하고자 할 때 유용합니다.

textContent: 요소의 텍스트를 변경합니다. HTML 태그를 포함한 문자열을 직접 대입하더라도 HTML 태그로 해석하지 않고 그대로 텍스트로 처리합니다. 이 방법은 XSS 공격을 방지할 수 있으며, 단순히 텍스트를 변경하고자 할 때 유용합니다.

innerText: 요소의 가시 텍스트를 변경합니다. HTML 태그를 포함한 문자열을 대입하면 해당 HTML 태그를 해석하고 그에 따라 가시 텍스트를 변경합니다. 이 방법은 텍스트를 변경하면서도 요소의 CSS 스타일에 영향을 줄 수 있습니다.
 */



// switch 문으로 커피 가격 책정하기


let price = 0;
let coffee = prompt('무슨 커피를 선택하시겠습니까?');

switch (coffee) {
    case "에스프레소": price = 3000;
        break;
    case "밀크커피": price = 4000;
        break;
    case "더치커피": price = 6000;
        break;
    case "카페라떼": price = 4500;
        break;
    case "아메리카노": price = 2000;
        break
    default:
        document.getElementById('coffee').innerText = coffee + '는 없습니다';
}

//document.wirte는 정의된 ID 에 값이 덮어씌어진다. 그러기에 항상 getElementByID로 값을 지정해줘야한다.

if (price != 0) {
    document.getElementById('coffee result').innerText = `${coffee}는 ${price}입니다.`;
}

//for문으로 폰트 크기 조정해보기

for (let size = 10; size <= 35; size += 5) {
    let fontSizeSpan = document.createElement('span');
    fontSizeSpan.innerText = `${size}px`;
    fontSizeSpan.style.fontSize = size + 'px';
    document.getElementById('fontSize').appendChild(fontSizeSpan);
}

//while문으로 0~n까지의 합 구하기

let num = prompt('0보다 큰 정수를 입력해주세요',0);

let i = 0, sum = 0 ;
while(i <= num){ 
    sum += i
    i++;

} 

document.getElementById('sum-result').innerText = `0에서부터 ${num}의 합은 ${sum}입니다.`





