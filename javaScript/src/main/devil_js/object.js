//Object.assign() -> 복사
const user = {
    name:'tom',
    age:30,
    gender:'male'
}
//const newUser = user -> 단순 주소 복사
const newUser = Object.assign({},user);
console.log('NewUser:',newUser);
//Object.values() -> 값 배열 반환
const keys = Object.keys(user);
const values = Object.values(user);
console.log(keys);
console.log(values);

//Object.entires() -> 키/값의 배열 반환
const entry = Object.entries(user);
console.log('entry:',entry);



let n = 'name';
let a = 'age';

//computed property -> []
const myUser = {
    [n]:"Mike",
    [a]:30,
    [1+4]:5
};

function makeObj(key,val){
    return {
        [key]:val
    }
}

const obj = makeObj("이름",30);
console.log(obj);