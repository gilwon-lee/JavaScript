window.addEventListener("load",()=>{
    function job1(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){reject('rejected');
            },2000);
        });
    }  
    function job2(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){resolve('resolved ok');
            },2000);
        });
    }
    //네이스틱 방식
    // job1.then(function(data){
    //     console.log('data:',data);
    //     job2().then(function(data){
    //         console.log('data2:',data);
    //     })
    // })
    //체이닝 방식
    job1().then(function(data){
        console.log('data1:',data);
        return job2();
    })
    .catch(function(reason){
        console.log('reason:',reason);
        //Promise.reject();
        //에러 발생시 뒤에 then을 실행하지 않고 끝냄
        return Promise.reject();
    })
    .then(
        function(data){
            console.log('data2:',data);
        })
});
