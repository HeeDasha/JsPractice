// 연산자 중 += '변수' 는  기존에 정의 된 변수에 += '변수'를 더한다 라고 생각하면 된다.
let num = 34;

num *= 4;
console.log(num);
prompt(num);

// name은 매개변수이고 test는 함수명이라고 불린다. ``은 백틱이라고 불리고 특정 변수의 값을 가져올 수 있다.
// 함수를 사용하는 이유는 중복을 줄여주기 위해서 사용하는 것이다. --> 유지보수가 용의하다.

// function Tellname(name,age) {

//     let msg = 'Sorry';
//     if(name === 'mike' && age  === 20) {
//         console.log("마이크님 환영합니다.")

//     }
//     else{
//         msg += ', ' + `${name}님은 마이크가 이닙니다.`;
//         console.log(msg);
//     }

// }

// Tellname('mike',  );

// let name = 'jane'

// function Sayname(name) {
//     console.log(name);

// }

// console.log('mike');
// // console.log();

// const Profile = {
//     age : 20,
//     name : 'Peter',
//     hobby : 'Football'

// }

// Profile.job = 'Programmer';

// // delete Profile.job;

// console.log(Profile);

// function Object(name,age) {

// return {
//     name : name,
//     age :  age,

// }

// }

// const Mike = Object('Mike',30);

// // Object(Mike);

// console.log(Mike);
// console.log('age' in Mike);
// console.log('job' in Mike);

// function Adult(user) {

//     if( !('age' in user) || user.age <20)
//     {
//         return `${user.name}은 성인이 아닙니다`;

//     }
//     return `${user.name}은 성인입니다`;

// }

// const Peter = {

//     name : '김희찬',
//     age : 20,

// };

// const Jane = {

//     name : '제인',

// };

// Peter.Job = 'Programmer';

// for(x in Peter) {
//     console.log(x);
// }

// // console.log(Adult(Peter));
// // console.log (Adult(Jane));
