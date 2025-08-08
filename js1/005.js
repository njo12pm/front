// type : number, string, boolean, undefined, null, bigint, object

let name = "홍길동";
let nai = 20;
let hobby = "프로그래밍";

// 변수는 1개의 값을 저장
// 여러개를 저장하려면? 여러개를 모아서 하나의 가방에 담는다(object - 객체)
// object는 key/value로 구성된다
let saram = {name:"홍길동", nai:20, hobby:"프로그래밍"};

console.log(saram);
console.log(saram.name);
console.log(saram["name"]);

let choice = "nai";
console.log(saram[choice]);