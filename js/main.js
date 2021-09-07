



// IF 조건문
// var a = 20;
// var b = 40;
// var c = 60;	
/*
if(a < b) {
	console.log("a는 b보다 작다.");
}
*/
/*
if(a > b) {
	console.log("a는 b보다 크다.");
}
}else {
	console.log("a는 b보다 작다.");
}
*/
/*
if(a > b) {
	console.log("a는 b보다 크다.");
} else if(b > c) {
	console.log("b는 c보다 크다.");
} else if(a < c) {
	console.log("a는 c보다 작다.");
} else if (b < c) {
	console.log("b는 c보다 작다.");
} else {
	console.log("모든 조건을 만족하지 않는다.")
}
*/
// 여러개의 참이 존재하면 가장 처음 나온 참을 출력한다.

// 중첩 if문 (if문 안에 if를 넣는것.)


/*
if(a !== b) {
	if (a > b) {
		console.log("a는 b보다 크다.")
	} else {
		console.log("a는 b보다 작다.")
	}
} else {
	console.log("a와 b는 같다.")
}
*/

//거짓이 되는 상황
//false, "", 0, null, undefined
/*
var test = "Hello"

if(test) {
	console.log("참!!!");
} else {
	console.log("거짓!!");
}
*/

// 삼항 연산자 (조건문과 비슷)
/*
var age = 15;

if(age >= 18) {
	console.log("성인");
} else {
	console.log("어린이");
}

// 위와같이 단순한 if문이라면 삼항 연산자로 깔끔하게 정리가 가능하다.
// 결과 =  조건 ? 참 : 거짓
var result = (age >= 18) ? "성인" : "어린이";
console.log(result);
*/

/*
// prompt - 값을 전달받는 팝업 (전달받은 데이터값은 문자열(string))
var userId = prompt("아이디를 입력해 주세요.");
var userPw = prompt("비밀번호를 입력해 주세요.");

// console.log(userId);
// console.log(userPw);

// parseInt(userPw) -> 데이터 타입을 정수형으로 바꿔준다.
// alert - 알림창
if(userId === "Dohyun" && userPw ==="123123") {
	alert("로그인 되었습니다.")
} else {
	alert("아이디 또는 비밀번호가 틀렸습니다.")
}
*/

// 전역변수(모든 범위), 지역변수 (일부 범위)
// 함수 밖에서 만들어진 함수 - 전역변수 
//함수 안에서만 영향력을 가지는 변수 - 지역변수

/*
var globalV = "전역변수";

function func() {
	var localV = "지역변수";

	console.log(globalV);
	console.log(localV);

}
// func();

	console.log(globalV); 
	console.log(localV);
*/
// let, const로 변수를 만들경우 전역변수와 지역변수 구분이 달라질수 있다.

/*
var gv = "전역변수";

function func() {
	var gv = "지역변수";
	console.log(gv);
}

func();
console.log(gv);
*/
//함수 안에서 새로운 변수를 만들기때는 var와 함께 사용해야한다 그렇지 않으면 함수 밖의 값이 변경될수 있다.

/*
var gv = "전역변수";
if (true) {
	var lv = "지역변수???";

	// console.log(gv);
	// console.log(lv);

} 

	console.log(gv);
	console.log(lv);
*/

// var gv = "전역변수";
// var aaa = "aaa";

/*
function a() {
	console.log("a");
}
*/

// 스코프 - 변수가 영향역을 발휘할수있는 범위 (전역변수와 지역변수 구분짓는다고 할수 있음.)
// 전역 스코프
/*
var gv = "전역변수";

function func() {
	console.log(gv);

}

func();

console.log(gv);
*/
//지역 스코프
/*
function func() {
	var lv = "지역변수"
	console.log(lv);
}
func();

console.log(lv);
*/


// 렉시컬 스코핑
// 함수는 서로의 스코프에 접근할 수 없다! @@@@@@@@@@@@@@중요 @@@@@@@@@@
/*
function a() {
	var apple = "사과";
}
function b() {
	a(); //var apple = "사과"; 라는 구문이 포함되는것이 아님. (함수호출이 안됨.)
	console.log(apple);
}
b();
*/

// 스코프체인 - 함수 안쪽에서 밖으로 탐색 (범위가 겹치는 구조) 그러나, 밖에서 안으로는 탐색이 불가능.

/*
var a = 10;
function func1() {
	var b = 20;

	function func2() {
		var c = 30;

		console.log(a + b + c);
	}

	func2();
}

func1();
*/


/*
var a = 100;
a = 3.14;

var name = "Dohyun"; 

function func1() {
	console.log(name); //전역변수 이름

}
function func2() {
	var name = "Kim"; //지역변수 이름 
	func1(); //console.log(name) (x)
}

func2();
*/


//호이스팅 (끌어 올린다는 개념)
//변수 호이스팅

//선언한 했을때만 끌어 올라가진다.
/*
console.log(a);

// var a;
// a = "나는  A다."

var a = "나는 A다."

console.log(a);
*/

// 함수 호이스팅 
/*
func1();

function func1() {
	console.log("Func1 함수다.");
}

//func1();

//주의점 

func2(); //이미 변수 호이스팅으로 끌어 올라간 상태이기 때문에 함수문이 아니게 된다.

var func2 = function() {
	console.log("Func2 함수다.");
}

func2();
*/


// Math

// console.log(Math)

// var num1 = Math.abs(-3); //절대값 반환
// console.log(num1);

// var num2 = Math.ceil(0.3); //올림처리
// console.log(num2);

// var num3 = Math.floor(10.9); //내림처리
// console.log(num3);

// var num4 = Math.random(); //랜덤한 숫자  0 ~ 1사이값.
// console.log(num4)



// parseInt() - 정수형태로 바꿔줄때 , parseFloat() - 실수형태로 바꿔줄때
// string -> number
var str1 = "20.6";
var str2 = "3.14";

var num1 = parseInt(str1) //소수점 이하는 버리고 출력
var num2 = parseFloat(str2) 

console.log(num1);
console.log(num2);












