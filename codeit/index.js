// return 'Wel'ome to my world!')

// let coffeePrice = 3000;
// console.log("coffee price : " + coffeePrice + "원");




// let espressoKcal = 10;
// let milkKcal = 170;
// let chocoKcal = 50;
// let whippedKcal = 60;

// console.log(espressoKcal);
// console.log(espressoKcal + milkKcal);
// console.log(espressoKcal + milkKcal + chocoKcal);
// console.log(espressoKcal + milkKcal + chocoKcal + whippedKcal);





// function teraToGiga(tera){
//     console.log(tera + "TB는");
//     console.log(tera * 1024 + "GB 입니다.");
// }

// function teraToMega(tera){
//     console.log(tera + "TB는");
//     console.log(tera * 1024 * 1024 + "MB 입니다.");
// }
// // TB -> GB 테스트
// teraToGiga(2);
// // TB -> MB 테스트
// teraToMega(2);




// function bmiCalculator(name, weight, height){
//     let bmi = weight / (height ** 2 / 10000);
//     console.log(name + "님의 체질량지수는 " + bmi + "입니다.");
// }

// bmiCalculator('홀쭉이', 43.52, 160);
// bmiCalculator('코린이', 61.25, 175);
// bmiCalculator('통통이', 77.76, 180);





// function interestCalculator(myMoney, saveTerm, interestRate){
//     let myInterest = myMoney * saveTerm * interestRate / 100;
//     return(myInterest)
// }

// let myMoney = 3650000; // 맡긴 금액 (원)
// let saveTerm = 1; // 맡기는 기간 (년)
// let interestRate = 4; // 이자율 (%)

// let myInterest = interestCalculator(myMoney, saveTerm, interestRate);
// let totalMoney = myMoney + myInterest;

// return '맡긴 '액은 ' + myMoney + '원 입니다.');
// return '이자는'' + myInterest + '원 입니다.');
// console.log(`최종 받을 금액은 ` + totalMoney + `원 입니다.`);




// function calcWage(name, time, wage) {
//     let total = time * wage;
  
//     console.log(`${name}님의 근무 시간은 총 ${time}시간이며, 최종 급여는 ${total}원 입니다.`);
//   }
  
//   calcWage('김윤식', 208, 11340);
//   calcWage('성규재', 175, 12160);
//   calcWage('손태웅', 161, 13070);
//   calcWage('허우선', 222, 10980);





// let material1 = 3;
// let material2 = '3';
// let material3 = 10;
// let material4 = '4';
// let material5 = 4;

// let result1;
// let result2;

// result1 = material2 + material4
// result2 = material1 * material3 + material5

// console.log(result1);
// console.log(typeof result1);
// console.log(result2);
// console.log(typeof result2);




// function logParticipant(name){
//     console.log(`${name}(이)가 대화에 참여했습니다.`);
//   }
    
//   logParticipant('동수');
//   logParticipant('윤하');
//   logParticipant('재준');
//   logParticipant('동훈');
//   logParticipant('영희');
//   logParticipant('신욱');





// function expressMultiplication(fir, sec){
//     console.log(`${fir} * ${sec} = ${fir * sec}`);
//   }

//   expressMultiplication(3, 4);
//   expressMultiplication(3, 2);
//   expressMultiplication(7, 5);
//   expressMultiplication(8, 9);
//   expressMultiplication(5, 5);
//   expressMultiplication(9, 9);





// function calculateRectangleArea(width, height){
//     return width * height;    
// }

// let area1 = calculateRectangleArea(3, 4); // 가로 3, 세로 4인 직사각형의 넓이 계산
// let area2 = calculateRectangleArea(5, 8); // 가로 5, 세로 8인 직사각형의 넓이 계산
// let area3 = calculateRectangleArea(7, 2); // 가로 7, 세로 2인 직사각형의 넓이 계산

// console.log(`Area1: ${area1}, Area2: ${area2}, Area3: ${area3}`);




// function introduce(name, age, nationality = '한국') {
//     console.log(`제 이름은 ${name}입니다.`);
//     console.log(`나이는 ${age}살입니다.`);
//     console.log(`국적은 ${nationality}입니다.`);
// }

// introduce('전유미', 32);




// function orderSetMenu(sandwich, drink='스프라이트') {
//     console.log(`주문하신 ${sandwich}, ${drink} 세트메뉴 나왔습니다!`);
// }
// orderSetMenu('코드웨잇 클럽');
// orderSetMenu('터키베이컨 아보카도', '코카콜라');
// orderSetMenu('코드웨잇 멜트');
// orderSetMenu('이탈리안 비엠티', '닥터페퍼');
// orderSetMenu('에그마요', '환타 오렌지');





// let adultTag = '삑!'
// let teenagerTag = '삑삑!'
// let errorTag = '삑삑삑!'
// let transferTag = '환승입니다.'

// function tagNotification(tagCase) {
//     console.log(tagCase);
// }

// tagNotification(adultTag);
// tagNotification(teenagerTag);
// tagNotification(transferTag);
// tagNotification(errorTag);
// tagNotification(adultTag);





// function checkHeight(height) {
//     const LIMIT = 140;
//     let passMessage = '탑승이 가능합니다.';
//     let failMessage = '탑승이 불가능합니다.';

// 	if (height >= LIMIT) {
//         console.log(passMessage);
//     } else {
//         console.log(failMessage);
//     }
// }

// checkHeight(140);
// checkHeight(135);
// checkHeight(170);











// function printGrade(midtermScore, finalScore){
// 	let totalScore = midtermScore + finalScore;
//     if (totalScore >= 90) {
//         return 'A')'
//     } else if (totalScore >= 80) {
//         return 'B')'
//     } else if (totalScore >= 70) {
//         return 'C')'
//     } else if (totalScore >= 60) {
//         return 'D')'
//     } else {
//         return 'F')'
//     }
// }

// printGrade(25, 35);
// printGrade(50, 45);
// printGrade(29, 24);
// printGrade(37, 42);








// let myAge = 26;
// let myGender = 'male';

// let callOlderBrother = '형';
// let callOlderSister = '누나';
// let callFriend = '친구';
// let callYoungerSister = '여동생';
// let callYoungerBrother = '남동생';

// function whatShouldICallYou(yourAge, yourGender) {
//     if (myAge === yourAge) {
//         return callFriend;
//     } else if (myAge > yourAge) {
//         if (yourGender === 'male') {
//             return callYoungerBrother;
//         } else {
//             return callYoungerSister;
//         }
//     } else {
//         if (yourGender === 'male') {
//             return callOlderBrother;
//         } else {
//             return callOlderSister;
//         }
//     }
// }

// let result1 = whatShouldICallYou(25, 'female');
// let result2 = whatShouldICallYou(20, 'male');
// let result3 = whatShouldICallYou(26, 'female');
// let result4 = whatShouldICallYou(30, 'male');
// let result5 = whatShouldICallYou(31, 'female');

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);









// let VIPPrice = 15;
// let RPrice = 13;
// let SPrice = 10;
// let APrice = 8;

// function checkPrice(grade) {
//     switch(grade) {
//         case 'VIP':
//             console.log(`VIP석은 ${VIPPrice}만원 입니다.`);
//             break;
//         case 'R':
//             console.log(`R석은 ${RPrice}만원 입니다.`);
//             break;
//         case 'S':
//             console.log(`S석은 ${SPrice}만원 입니다.`);
//             break;
//         case 'A':
//             console.log(`A석은 ${APrice}만원 입니다.`);
//             break;
//         default:
//             console.log(`VIP, R, S, A 중에서 하나를 선택해 주세요.
//             `);
//     }
// }

// checkPrice('R');
// checkPrice('VIP');
// checkPrice('S');
// checkPrice('A');
// checkPrice('B');





// function printTriangle(height) {
//     let star = '';
//     for(let i = 1; i <= height; i++) {
//         star += '*';
//         console.log(star);
//     }
// }

// console.log('높이: 1');
// printTriangle(1);

// console.log('높이: 3');
// printTriangle(3);

// console.log('높이: 5');
// printTriangle(5);






// const N = 180;
// // 여기에 코드를 작성하세요
// let i = 1;
// while (i <= 180){
//   if (N % i == 0) {
//     console.log(i);
//     }
//     i++;
// }





// for (let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= 9; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }





// let current = 1;
// let previous = 0;

// for (let i = 1; i <= 50; i++) {
//   console.log(current);
//   let temp = previous;  // previous를 임시 보관소 temp에 저장
//   previous = current;
//   current = current + temp;  // temp에는 기존 previous 값이 저장돼 있음
// }

