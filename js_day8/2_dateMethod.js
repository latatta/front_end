//new Date() 로 실행한 결과값 형식은 toString() 생략된 문자열 입니다.
//현재시간 : 운영체제 설정된 시간.
console.log(new Date())   
//Thu Mar 17 2022 10:30:57 GMT+0900 , 요일 월 일 년도 시:분:초 GMT(그리니치천문대)+또는- 시간
//날짜 지정 : 년도,월,일 (단, 월 0~11 입니다.)
console.log(new Date(2002,05,01))  //날짜 지정 : Sat Jun 01 2002 00:00:00 GMT+0900 (대한민국 표준시)  -> 6월
//날짜 시간 지정 :년도,월,일,시,분,초
console.log(new Date(2022,02,16,9,30,25))  //Wed Mar 16 2022 09:30:25 GMT+0900(3월)
//getTime 메소드  : 1970년 1월1일 기준으로 지나온 시간을 ms 단위로 계산하여 리턴
console.log(new Date().getTime())
//세계표준시
console.log(new Date().toUTCString())
//세계 표준시 : 출력형식이 다릅니다.
console.log(new Date().toISOString())   
//운영체제에 설정된 국가에 맞는 형식
console.log(new Date().toLocaleString())
//get 메소드
const today = new Date();
console.log(today.getFullYear())
console.log(today.getMonth())       //3월이므로 값은 2
console.log(today.getDate())
console.log(today.getHours())    //getMinutes(분), getSeconds(초) 메소드도 있습니다.
console.log(today.getDay()) //요일 결과 확인해보세요.: 0(일)~6(토)
//몇년 전or후, 몇달 전or후, 몇일 전or후, 몇시간 전or후,...  : set메소드
today.setFullYear(today.getFullYear()+2);       //현재 today에서 2년후
console.log(today)
today.setFullYear(today.getFullYear()-2);       //현재 today에서 2년전
console.log(today)

//오늘날짜에서 15일 이후



