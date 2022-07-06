window.addEventListener("load",()=>{
    let words = ['spray','limit','elite','exuberant','destruction','present'];
    function myfilter(origin,callback){
        let result =[];
        for(let i=0;i<origin.length;i++){
            let current = origin[i];
            if(callback(current)){
                result.push(current);
            }
        }
        return result;
    }
    newWords = myfilter(words,element=>element.length>6);
    console.log(newWords);
    
    //fetch 함수는 promise 타입을 리턴한다. ->비동기 함수일 확률이 높음
    //  fetch("https://jsonplaceholder.typicode.com/posts").then(
    //  function(response){
    //     return response.json();
    //  }).then(function(myJson){
    //     console.log(JSON.stringify(myJson));
    // });

    // fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then(function(response){
    //         // response.json().then(function(data){
    //         //     console.log('data:',data);
    //         // });
    //         return response.json();
    //     })
    //     .catch(function(reason){
    //         console.log('reason:',reason);
    //     }).then(function(data){
    //         console.log('data',data);
    // })
    function timer(time){
        return new Promise(function(resolve){
            setTimeout(function(){
                resolve(time);
            },time);
        });
    }
    /*
    console.log('start');
    timer(1000).then(function(time){
        console.log('time:',time);
        return timer(time+1000);
    }).then(function(time){
        console.log('time:',time);
        return timer(time+1000);
    });
    */
   //async -> 비동기 함수 promise 리턴
    async function run(){
        console.log('start');
        let time = await timer(1000);
        console.log('time:'+time);
        time = await timer(time+1000);
        console.log('time:'+time);
        time = await timer(time+1000);
        console.log('time:'+time);
        console.log('end');
    }
    async function run2(){
        console.log('parent start');
        await run();
        console.log('parent end');
    }
    run2();
});


