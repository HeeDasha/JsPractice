/* 2024-04-18 JS 수업 */

//두 수의 합을 구하는 함수 구현 (Prompt로 값을 받기)

function sumResult(num1,num2) {

    let result = num1+num2;
    return result;
    
    }
    
    let a = parseInt(prompt('첫번째 숫자를 입력해주세요'));
    let b = parseInt(prompt('두번째 숫자를 입력해주세요'));
    
    
    document.getElementById('result1').innerText =`두 수의 합은 ${sumResult(a,b)} 입니다.`;  
    
    //prompt로 입력받은 숫자의 구구단 출력
    
    
    function gugudan() {
    
        let num = parseInt(prompt('구구단 1부터9까지 입력해주세요')); // 지역변수 선언
        
        if(num<1 || num >10) {
            alert(`${num}은 1부터 9까지의 숫자가 아닙니다.`);
            return;
        }
    
        let result = ''; // 변수 초기화
    
        for(i=1; i<10; i++) {
            result += `${num} * ${i} = ${num*i} \n`;  // += 대신 = 를 사용하면  result 값이 계속 덮어씌어진다.
        }
    
        return result; // 구구단 결과값 리턴받기
    
    }
    
    
    document.getElementById('result2').innerText = gugudan();


    