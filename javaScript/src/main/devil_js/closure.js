//Closure 함수와 렉시컬 환경의 조합
//함수가 생성될 당시의 외부 변수를 기억
// 생성 이후에도 계속 접근 가능 
//내부에서 외부 함수에는 접근 가능
//외부에서 내부 함수는 접근이 불가능
function makeAdder(x){
    return function(y){
        return x+y;
    }
}

const add3 = makeAdder(3);
console.log(add3(2)); //5


let lo = '10';
function fn1(){
    let l1 ='l1';
    console.log(lo,l1);
    fn2();
}
function fn2(){
    let l2 ='l2';
    // console.log(lo,l1,l2); <- 접근 불가
}

fn1();

function fac(num1){
    function plus(num2){
        return num1+num2;
    }
    return plus;
}

let plus1 = fac(1);
console.log(plus1(1));
console.log(plus1(2));

let plus2 = fac(2);
console.log(plus2(1));
console.log(plus2(2));
