/* 배열 선언 */
let arr = [] ;//이 방법을 많이 씀
let arr2 = new Array() ; 

/* 배열 추가 삭제 :뒤에서 */
arr.push('🍕');// push : 맨처음 들어간게 맨 밑에 저장
arr.push('🍔');//이모지는 .+window키
arr.push('🍟');
console.log(arr);
//push pop 많이 사용

arr.pop();//pop - 뒤에서 하나 제거
console.log(arr);

 
/* 배열 추가 삭제 :앞에서 */
arr.unshift('🤣');//뒤에꺼 밀고 맨 앞에 삽입
arr.unshift('😁');
console.log(arr);

arr.shift();//맨 앞에꺼 제거
console.log(arr);



/* 배열 순회1 */
//하나씩 접근해서 쓴다
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
} 

/* 배열 순회2 */
//for of 구문
for(let i of arr){
    console.log(i);
} 

/* 배열의 length 속성*/
console.log(arr);
console.log(arr.length) ; 
//배열 비우기 //속성값은 private으로 설정됨.자스에서 length는 속성인데 변경가능
arr.length = 0;
console.log(arr);

/* 배열을 문자열로 반환*/
arr = ['🍕','🍔','🍗','🍜',] ; //배열 마지막 ',' : 텔링콤마. 오류안남. 배열이 변경될 수 있다는 의미
let s = arr.toString();
console.log(s); 

// /* 문자열 split하면 배열반환*/
let sarr = s.split(',');
console.log(sarr);


/* 배열 정렬 */
let num = [1,3,5,2,4];
num.sort((a, b) => {return b-a;}) ;//내림차순 오름차순 할 때 콜백함수 이용하여 작성
console.log(num); 

/* 배열 섞기*/
num.sort(() => Math.random() - 0.5)
console.log(num); 

/* filter : 주어진 함수의 조건을 만족하는 요소를 모아 새로운 배열로 반환*/
//3보다 큰수 집합 

/* 실습 : 합집합, 교집합, 차집합 */
let setA = [1,2,3,4,5];
let setB = [4,5,6,7,8];

//합집합
let union = [...setA, ...setB]//두 배열을 펼쳐서 하나의 배열로 만듦 
console.log(union);

//교집합
let intersection = setA.filter((item) => setB.includes(item))//filter는 골라서 가져옴  
console.log(intersection);

let setA2 = setA.map((item) => item * 2 )//map은 다 가져오는데 어떻게 변형시켜 가져올건지
console.log(setA2);

//차집합
let difference = setA.filter((item) => !setB.includes(item))
console.log(difference);

//합집합 수정
union = [...setA, ...setB] 
console.log(union);



