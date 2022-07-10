//generator : 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
// next(),return(),throw()
//iterable -> 반복이 가능


// function* fn(){
//     yield 1;
//     yield 2;
//     yield 3;
//     return "finish";
// }

// const a = fn();

const arr = [1,2,3,4,5];
const it = arr[Symbol.iterator]();