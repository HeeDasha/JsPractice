let inputDate = prompt("날짜를 입력하세요.");

let now = new Date();
let firstDay = new Date(inputDate);
let toNow = now.getTime();
let toFirst = firstDay.getTime();
let passedTime = toNow - toFirst;
let passedDay = Math.round(passedTime/(24*60*60*1000));
document.getElementById('date1').innerText = "우리 만난지" + passedDay + "일";





function calcDate(days) {
    let future =toFirst + days * (1000*60*60*24);
    let someday = new Date(future);
    let year = someday.getFullYear();
    let month = someday.getMonth + 1;
    let date = someday.getDate();
    document.getElementById('date').innerText = days + "일 :" + year + "년" + month +"월 " + date + "일";
}


calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);
