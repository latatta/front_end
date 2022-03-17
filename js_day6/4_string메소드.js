/* string 메소드 정리 완료하면 구글 폴더에 올려주세요. 9시 30분까지.

-string 주요 메소드

slice(start,end)  : start,end 인덱스가 음수가 될수 있음.이때는 맨끝 부터 -1
substring(start,end)  : end 인덱스 문자는 포함 안함
substr(start,length)  : 두번재 인자가 추출할 길이
replace(src,dest)   : src문자열을 dest로 대체함.
toUpperCase()
toLowerCase()
concat(join,str2) :  str2문자열과 연결함. join문자열은 연결할때 사용할 문자열
padStart()  : 예제 참고
padEnd() : 예제 참고
charAt(index) : index위치의 문자 구하기, 
     - 자바스크립트에서는 문자열을 배열처럼 다룰수 있음. [] 안에 인덱스지정 가능.
split() : 문자열 나누기(구분기호 사용) -> 배열로변환

문자열검색 메소드 : 사용형식은 자바와 동일.
String indexOf()
String lastIndexOf()
String startsWith()
String endsWith()

*/