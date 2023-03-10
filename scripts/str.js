/* 문자열 순회 */
let s = "토마토123"
let st = "";
for(let i = s.length-1; i>=0; i--){
    st = st + s[i];
}
console.log(st);
if (s==st) console.log("회문")
else  console.log("비회문");

/* 실습 : 회문인지 판별 */
 st = s.split("").reverse().join("");//문자가 쪼개지면서 배열에 저장, 역순으로 출력, 한줄로 출력
 console.log(st);
 
/* 실습 : 문자열에 포함된 숫자의 합구하기*/ //반복문에서 index=0; index++
let sum=0;
st=s.split("");
for(let n of st){
    if (!isNaN(n)) sum = sum + parseInt(n);//isNaN 숫자이면 false값. 숫자만 출력하려면 ! 사용 / parseInt는 문자열을 정수로 변환
}
console.log(sum);

/* 여러줄 문자열 저장 - 백틱사용 */
s = `Ecma International의 프로토타입 기반의 프로그래밍 언어로, 스크립트 언어에 해당된다.
특수한 목적이 아닌 이상 모든 웹 브라우저에 인터프리터가 내장되어 있다. 
오늘날 HTML, CSS와 함께 웹을 구성하는 요소 중 하나다.
HTML이 웹 페이지의 기본 구조를 담당하고, CSS가 디자인을 담당한다면 
JavaScript는 클라이언트 단에서 웹 페이지가 동작하는 것을 담당한다.
웹 페이지를 자동차에 비유하자면, HTML은 자동차의 뼈대, CSS는 자동차의 외관, 
JavaScript는 자동차의 동력이라고 볼 수 있다.`
console.log(s);

 
/*실습 : 위의 문자열에서 HTML은 몇번 사용되었는지 확인 - 구글링*/
let pos = 0;
let cnt = 0;

//for는 끝이 정해져있을 때, while은 언제 끝날 지 모를 때 사용
while (true) {
    pos = s.indexOf("웹", pos);
    if (pos == -1) break;

    cnt++;
    pos = pos + 1 ;
}
console.log(cnt);
console.log(pos);


/* 문자열 슬라이싱*/
let w = s.substr(0, 4)//0번째 부터 4개 자름
console.log(w);

w = s.substring(5, 10);//5번 째부터 10번째까지
console.log(w);

w = s.slice(-4);//substring과 같으나 차이는 마이너스 값 가능. -4번째부터 끝까지 출력
console.log(w);

w = s.slice(4);//4번 째부터 끝까지 출력
console.log(w);

