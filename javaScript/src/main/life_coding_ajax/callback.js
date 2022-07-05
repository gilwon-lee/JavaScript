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

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function(response){
            // response.json().then(function(data){
            //     console.log('data:',data);
            // });
            return response.json();
        })
        .catch(function(reason){
            console.log('reason:',reason);
        }).then(function(data){
            console.log('data',data);
    })
});


