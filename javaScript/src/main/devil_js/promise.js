const pr = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("OK");
        //reject("Error");
    },1000);
})
/*
console.log("시작");
pr.then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("끝");
})

const f1 = (callback) =>{
    setTimeout(function(){
        console.log("1번 주문 완료");
        callback();
    },1000);
}

const f2 = (callback) =>{
    setTimeout(function(){
        console.log("2번 주문 완료");
        callback();
    },3000);
}
const f3 = (callback) =>{
    setTimeout(function(){
        console.log("3번 주문 완료");
        callback();
    },2000);
}

console.log("시작");
f1(function(){
    f2(function(){
        f3(function(){
            console.log("끝");
        });
    });
});*/

const f1 = (message) =>{
    return new Promise((res,re)=>{
        setTimeout(()=>{
            res("1번 주문 완료");
        },1000);
    });
}

const f2 = (message) =>{
    return new Promise((res,re)=>{
        setTimeout(()=>{
            res("2번 주문 완료");
        },3000);
    });
}
const f3 = (message) =>{
    return new Promise((res,re)=>{
        setTimeout(()=>{
            res("3번 주문 완료");
        },1000);
    });
}



f1().then((res)=> f2(res))
.then((res)=> f3(res))
.then((res)=> console.log(res))
.catch((err)=>{console.log("에러:",err)})
.finally(()=>{
    console.log("끝");
})

//Promise.all
Promise.all([f1(),f2(),f3()]).then((res)=>{
    console.log(res);
})