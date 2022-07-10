/* 
배열 구조 분해
*/

let [a,b,c] = [1,2,3];

let user ={name:'Mike',age:30};
let {name,age} = user;
let {name:userName,age:userAge} = user;
console.log(name);
console.log(userName);
console.log(age);

//arguments -> 함수로 넘어온 모든 인수에 접근
//함수내에서 이용 가능한 지역 변수
function showName(name){
    console.log(arguments.length);
    console.log(arguments[1]);
}
//나머지 매개변수
// ...변수 
function add(...numbers){
    let result=0;
    numbers.forEach((num)=>{
        result+=num;
    });
    console.log('add:',result);
}

add(1,2,3);
add(1,2,3,4,5,6);

function User(name,age,...skill){
    this.name =name;
    this.age =age;
    this.skill =skill;
}

const user1 = new User('Mike',30,'html','css');
const user2 = new User('Tom',20,'js','css');
const user3 = new User('Jane',10,'html');

console.log(user1);
console.log(user2);
console.log(user3);

let arr1 =[1,2,3];
let arr2 =[4,5,6];

// arr2.reverse().forEach(num=>{
//     arr1.unshift(num);
// })

//arr1 =[...arr2,...arr1];
arr3 = [].concat(arr1,arr2);
console.log(arr3);

