var day1 = new Date();  // 현재
console.log(day1);

// 시간 수정 가능
// 표준 시간은 9시
day1 = new Date(2014, 0, 1, 3); 
console.log(day1);
day1 = new Date(2009, 6, 19);
console.log(day1);
day1 = new Date('2009/12/20/18:00:00');
console.log(day1);

// 날짜 간격 계산
// getTime -> ms 기준
day1 = new Date('2023-07-18');
console.log(day1.getTime());
var day2 = new Date('2023-07-21');
console.log(day2.getTime());

var gap = day2.getTime() - day1.getTime();
console.log(gap + ' ms');
console.log(gap/(1000 * 60 * 60 * 24) + ' days');

// 날짜 변경
day2.setDate(25);
day2.setFullYear(2035);
console.log(day2);

// 날짜를 초과로 입력할 경우 다음으로 넘어감
day2.setDate(32);
console.log(day2);  // 7 -> 8 월
day2.setDate(0);
console.log(day2);  // 8 -> 7 월

// 특정 달의 일 수 확인하는 간단한 방법
day1 = new Date();
day1.setMonth(2);   // 3 월
day1.setDate(0);    // 2 월로 돌아가면서 2월의 최대 날짜가 갱신됨
console.log(day1.getDate());

// 3 일 후 날짜 출력하는 간단한 방법
day1 = new Date();
console.log(day1);
day1.setDate(day1.getDate() + 3);
console.log(day1);
