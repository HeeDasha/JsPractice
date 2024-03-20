//전역변수 선언 
const name = "김희찬";



//함수를 선언하여 재활용 기능 활성화 

function AccountRe(){


    
    let age = prompt("나이를 입력해주세요", ); // 나이 값 할당
    let job = prompt("직업을 입력해주세요", ); // 직업 값 할당

    console.log( `${name}님은 나이가 ${age}살이고 직업은 ${job} 입니다.`); //백틱으로 값 확인


}



AccountRe(age,job); // 함수 호출 




