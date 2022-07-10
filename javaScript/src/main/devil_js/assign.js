let arr =[1,2,3,4,5];
//삭제 및 추가
//arr.splice(1,2);//((시작,갯수)
//let spl = arr.splice(1,2); -> 잘린 값이 들어간다.

console.log(arr);
arr.slice(1,4); // 지정된 (n,m) n번부터 m번까지
console.log(arr);

let arr1 =[1,2];
console.log(arr1.concat([3,4]));

let arr2 = ['Mike','Tom','Jane'];
//forEach(item,index,arr)
arr2.forEach((name,index)=>{
    console.log(`${index+1}. ${name}`);
})
// arr2.indexOf('찾는숫자','찾을 순서')
// arr2.include(값) 값이 포함 하고 있는지

const result = arr.find((item)=>{
    //return 값이 true 일때 값을 반환
    return item % 2=== 0;
});

//filter : 찾는 조건이 맞는 모든 값을 찾을 때
const result1 = arr.filter((item)=>{
    //return 값이 true 일때 값을 반환
    return item % 2=== 0;
});

console.log(result);
console.log('filter:',result1);


let userList =[
{name:'Mike',age:30},
{name:'Jane',age:28},
{name:'Tom',age:10}
];

let newUserList = userList.map((user,index)=>{
    return Object.assign({},user,{
        id:index+1,
        isAdult:user.age>19,
    });
})

console.log('newList:',newUserList);
userList.find((user)=>{
    //첫번쨰 true만 찾음 없으면 undefined
    if(user.age<19){
        return true;
    }else
    return false;
});
//console.log('result',result);

