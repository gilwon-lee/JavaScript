//Symbol : 유일성 보장
const a  = Symbol('id'); // new 를 붙이지 않음
const b  = Symbol(); // new 를 붙이지 않음

const user ={
    name :'Mike',
    age:30,
    [a]:'myid'
}
// console.log(user);

const showName = Symbol("show name");
user[showName] = function(){
    console.log(this.name);
};
user[showName]();
for (let key in user)
{
    console.log(`His ${key} is ${user[key]}.`);
}
//Symbol.for(): 전역 심볼
/* 
하나의 심볼만 보장 받을 수 있음
없으면 만들고 있으면 가져오기 때문
Symbol 함수는 매번 다른 Symbol값을 생성하지만,
Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유
*/
