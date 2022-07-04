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
});

