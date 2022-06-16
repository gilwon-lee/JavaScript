//  cal_select.html : 엘리먼트 선택방법 개선하기


window.addEventListener("load",function(){
    let txtX = document.getElementById("txt-x")
    let txtY = document.getElementById("txt-y")
    let sum = document.getElementById("sum")
    let result = document.getElementById("result")
    
    function sumFunction(){
        let x = parseInt(txtX.value);
        console.log(x);
        let y = parseInt(txtY.value);
        console.log(y);
        result.value=(x+y);
    }
     sum.onclick = sumFunction;
    })
    
window.addEventListener("load",function(){
    let section2 =document.getElementById("section2");
    let inputs = section2.getElementsByTagName("input");
    let txtX = inputs[0];
    let txtY = inputs[1];
    let sum = inputs[2];
    let result = inputs[3];

    /*
    let inputs = section2.getElementsByClassName("input");
    let txtX = inputs[0];
    let txtY = inputs[1];
    let sum = inputs[2];
    let result = inputs[3];
    */
    function sumFunction(){
        let x = parseInt(txtX.value);
        console.log(x);
        let y = parseInt(txtY.value);
        console.log(y);
        result.value=(x+y);
    }
        sum.onclick = sumFunction;
})

window.addEventListener("load",function(){
    let section3 =document.getElementById("section3");
    let txtX = section3.querySelector("input[name='x']");
    let txtY = section3.querySelector(".txt-y");
    let sum = section3.querySelector(".sum");
    let result = section3.querySelector(".result");

    function sumFunction(){
        let x = parseInt(txtX.value);
        console.log(x);
        let y = parseInt(txtY.value);
        console.log(y);
        result.value=(x+y);
    }
        sum.onclick = sumFunction;
})

window.addEventListener("load",function(){
    let section4 =document.querySelector("#section4");
    //let inputs = section4.querySelectorAll("input");
    let box = section4.querySelector(".box");
    // chlidnode -> 노드를 대상으로 선택
    // children -> 태그를 대상으로 선택
    let input1 = box.children[0];
    let input2 = box.children[1];
    input1.value="hello";
    input2.value="ok";
})
