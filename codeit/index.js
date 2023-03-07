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









// let myVoca = {
//     function : "함수",
//     variable : "변수",
//     constant : "상수",
//     local : "지역의",
//     global : "전반적인",
// };

// // console.log(myVoca);
// // console.log(myVoca.local);
// // console.log(myVoca.constant);
// // console.log(myVoca.function);

// delete myVoca.function;
// delete myVoca.local;
// delete myVoca.constant;

// console.log(myVoca);
// console.log(myVoca.export);

// myVoca.extend = "확장하다";
// myVoca.export = "내보내다";
// myVoca.import = "불러오다";
// myVoca["default value"] = "기본값";

// console.log(myVoca);
// console.log(myVoca.export);

// console.log(["default value"]);




// let greeting ={
//     sayHello: function(name){
//         console.log(`Hello ${name}`);
//     }
// }

// greeting.sayHello("이름");





// let myVoca = {
//     addVoca: function(voca, mean){
//         myVoca[voca] = mean;
//     },
//     deleteVoca: function(voca){
//         delete myVoca[voca];
//     },
//     printVoca: function(voca){
//         console.log(`"${voca}"의 뜻은 "${myVoca[voca]}"입니다.`);
//     },
// };

// // addVoca메소드 테스트 코드
// myVoca.addVoca('parameter', '매개 변수');
// myVoca.addVoca('element', '요소');
// myVoca.addVoca('property', '속성');
// console.log(myVoca);

// // deleteVoca메소드 테스트 코드
// myVoca.deleteVoca('parameter');
// myVoca.deleteVoca('element');
// console.log(myVoca);

// // printVoca메소드 테스트 코드
// myVoca.printVoca('property');








// let codeit = {
//     name: '코드잇',
//     bornYear: 2017,
//     isVeryNice: true,
//     worstCourse: null,
//     bestCourse: '자바스크립트 프로그래밍 기초'
// }

// for (let key in codeit) {
//     console.log(key);
//     console.log(codeit[key]);
// }






// let hyesoonScore = {
// 	'데이터 모델링의 이해': 10,
// 	'데이터 모델과 성능': 8,
// 	'SQL 기본': 22,
// 	'SQL 활용': 18,
// 	'SQL 최적화 기본 원리': 20,
// };

// let minsoonScore = {
// 	'데이터 모델링의 이해': 14,
// 	'데이터 모델과 성능': 8,
// 	'SQL 기본': 12,
// 	'SQL 활용': 4,
// 	'SQL 최적화 기본 원리': 16,
// };

// function passChecker(scoreObject) {
//     let sum = 0;
//     for (let subject in scoreObject){
//         sum += scoreObject[subject];
//     }
//     if (sum >= 60) {
//         console.log("축하합니다! 합격입니다!");
//     } else {
//         console.log("아쉽지만 불합격입니다..")
//     }
// }

// passChecker(hyesoonScore);
// passChecker(minsoonScore);






// let today = new Date(2112, 8, 24);
// let jaeSangStart = new Date(2109, 7, 1);

// function workDayCalc(startDate) {
// 	// 여기에 코드를 작성하세요
//     let date = ((today-jaeSangStart)/1000/86400)+1;
// 	console.log(`오늘은 입사한 지 ${date}일째 되는 날 입니다.`);
// }

// workDayCalc(jaeSangStart);








// let fruits = ['레몬', '토마토', '딸기', '바나나'];
// let ages = [20, 24, 25, 29, 30, 33];
// let numbers = [];

// // fruits 배열에 '토마토'를 삭제하고 그 자리에 '사과', '청포도' 를 추가해 주세요
// fruits.splice(1,1,'사과','청포도');
// console.log(fruits);

// // fruits 배열의 첫 번째 요소를 삭제해 주세요
// fruits.splice(0,1);

// // ages 배열에 마지막 요소를 삭제해 주세요
// ages.splice(ages.length-1,1);

// // ages 배열의 2번, 3번 인덱스를 26, 28로 변경해 주세요
// ages.splice(2,2,26,28);

// // numbers 배열에 1, 2, 3, 5, 8, 9를 순서대로 추가해 주세요
// numbers = [1,2,3,5,8,9];

// // 반복문을 활용해서 numbers 배열의 요소들 중 홀수를 모두 삭제해 주세요
// for (let i=(numbers.length-1); i>=0; i--){
//     if (((numbers[i])%2) !== 0) {
//         numbers.splice(i, 1);
//     }
// }

// // 테스트 코드
// console.log(fruits[1]);
// console.log(fruits[0]);
// console.log(ages[ages.length - 1]);
// console.log(ages[3]);
// console.log(numbers[3]);
// console.log(numbers);








// 투표 결과 리스트
let votes = [
    '이재식', '이재식', '이규하', '이규하', '이규하',
    '이재식', '이재식', '이규하', '이규하', '이재식',
    '이규하', '이규하', '이규하', '이규하', '이재식',
    '이재식', '이규하', '이재식', '이재식', '이재식',
    '이재식', '이재식', '이규하', '이규하', '이규하',
    '이규하', '이규하', '이재식', '이규하', '이규하',
    '이규하', '이규하', '이재식', '이규하', '이규하',
    '이규하', '이재식', '이재식', '이재식', '이규하',
  ];
  
  // 후보별 득표수 객체
  let voteCounter = {};
  
  // votes 배열을 이용해서 voteCounter 객체를 정리하기
  for (let name of votes) {
    // 여기에 코드를 작성하세요
    // votes의 name을 불러와서 더하기.
    let person1 = {}
  }
  
  // 후보별 득표수 출력
  console.log(voteCounter);