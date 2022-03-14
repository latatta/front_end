/*
    자바스크립트 객체 : 원시값(number,string 등) 을 제외한 함수,배열도 객체입니다.
    객체 구성 : 프로퍼티(객체의 상태),메소드(객체의 동작/기능)
                객체의 프로퍼티값이 함수일때 메소드 입니다.

    객체 정의  : 자바에서는 클래스를 먼저 정의하고 필요할때 new 연산으로 생성
               자바스크립트는 프로토타입 기반이라고 합니다. 바로 객체 리터럴로 생성할 수 있습니다.
*/

let person = { name:'sana',
               age:19,
               sayHi : function(){    //메소드 정의:객체의 프로퍼티값이 함수 정의일때 메소드 입니다.
                 console.log(`Hi!! 나는 ${this.name} 입니다.`);   
               } 
            };        //객체리터럴을 이용하여 객체 생성

person.sayHi();     //객체의 메소드 실행

//프로퍼티 접근하여 person 객체의 이름변경
person.name='사나';     //방법1
person.sayHi();

person['name']='momo';  //방법2
person.sayHi();