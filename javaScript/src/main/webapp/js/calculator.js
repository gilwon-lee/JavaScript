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
    };
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
    };
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
    };
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

window.addEventListener("load",function(){
    let section5 =document.querySelector("#section5");
    //let inputs = section4.querySelectorAll("input");
    let srcInput = section5.querySelector(".src-input");
    let changeButton = section5.querySelector(".change-button");
    let img = section5.querySelector(".img");
    let imgSelect = section5.querySelector(".img-select")
    changeButton.onclick = function(){
        img.src ="../img/"+imgSelect.value;
    };
})

window.addEventListener("load",function(){
    let section6 =document.querySelector("#section6");
    let titleInput = section6.querySelector(".title-input");
    let menuListUl = section6.querySelector(".menu-list");
    let addButton = section6.querySelector(".add-button");
    let delButton = section6.querySelector(".del-button");

    addButton.onclick = function(){

        let title = titleInput.value;
        // += -> 성능 문제가 발생 할 수 있어서 동작이 느려진다면
        //밑에 있는 하나하나 추가하는 방법이 나을 수도 있음
        //menuListUl.innerHTML += "<li><a href=''>"+title+"</a></li>"
        let html = "<a href=''>"+title+"</a>"
        let li = document.createElement("li");
        li.innerHTML=html;
        // menuListUl.appendChild(li);
        menuListUl.append(li);
         
        
    //     let title = titleInput.value;
    //     let txtNode = document.createTextNode(title);
    //     let aNode = document.createElement("a");
    //     let liNode = document.createElement("li");
        
    //     aNode.href="";
    //     aNode.appendChild(txtNode);
    //     liNode.appendChild(aNode);
    //     menuListUl.appendChild(liNode);
    };

    delButton.onclick = function(){
        // menuListUl.childNode -> 모든 노드
        // menuListUl.children -> 모든 태그
        let liNode = menuListUl.children[ 0];
        //menuListUl.removeChild(liNode);
        liNode.remove();
    };
})


window.addEventListener("load",function(){
    let notices =[{id:5,title:"안녕하세요",regDate:"2022-06-17",writeId:"이길원",hit:5},
    {id:6,title:"안녕하세요1",regDate:"2022-06-17",writeId:"이길원",hit:6},
    ]
    let section7 =document.querySelector("#section7");
    let noticeList = section7.querySelector(".notice-list");
    let cloneButton = section7.querySelector(".clone-button");
    let temButton = section7.querySelector(".template-button");
    let tbodyNode = noticeList.querySelector("tbody");

    cloneButton.onclick = function(){
        let trNode = noticeList.querySelector("tbody tr");
        //true -> 모두 복제 false -> 껍데기만 복제
        let cloneNode = trNode.cloneNode(true);
        let tds = cloneNode.querySelectorAll("td");
        tds[0].innerText = notices[0].id;
        tds[1].innerHTML = '<a href="">'+notices[0].title+'</a>';
        tds[2].innerText = notices[0].regDate;
        tds[3].innerText = notices[0].writeId;
        tds[4].innerText = notices[0].hit;
        tbodyNode.appendChild(cloneNode);
    };

    temButton.onclick = function(){
        let template = section7.querySelector("template");
        for(let n in notices){
            let cloneNode = document.importNode(template.content,true);
            let tds = cloneNode.querySelectorAll("td");
            console.log(notices[n].id);
            tds[0].innerText = notices[n].id;
            tds[1].innerHTML = '<a href="">'+notices[n].title+'</a>';
            tds[2].innerText = notices[n].regDate;
            tds[3].innerText = notices[n].writeId; 
            tds[4].innerText = notices[n].hit;
            tbodyNode.appendChild(cloneNode);
            console.log(tbodyNode.appendChild(cloneNode));
        }
    };
})

window.addEventListener("load",function(){

    let section8 =document.querySelector("#section8");
    let noticeList = section8.querySelector(".notice-list");
    let upButton = section8.querySelector(".up-button");
    let downButton = section8.querySelector(".down-button");
    let tbodyNode = noticeList.querySelector("tbody");

    let currentNode = tbodyNode.firstElementChild;
    upButton.onclick = function(){
        let beforeNode = currentNode.previousElementSibling;
        if(beforeNode == null){
            alert("더 이상 이동 할 수 없습니다.")
            return;
        }
        //tbodyNode.removeChild(currentNode);
        //insertBefore -> 기존에 있는 것을 붙이기 때문에
        //removeChild는 필요 없음
        //tbodyNode.insertBefore(currentNode,beforeNode);
        currentNode.insertAdjacentElement("afterend",beforeNode);

    };

    downButton.onclick = function(){
        let nextNode = currentNode.nextElementSibling;
        if(nextNode == null){
            alert("더 이상 이동 할 수 없습니다.")
            return;
        }
        //tbodyNode.removeChild(nextNode);
        //tbodyNode.insertBefore(nextNode,currentNode);
        currentNode.insertAdjacentElement("beforebegin",nextNode);
    };
})

window.addEventListener("load",function(){

    let section9 =document.querySelector("#section9");
    let noticeList = section9.querySelector(".notice-list");
    let tbody = noticeList.querySelector("tbody");
    let allCheckBox = section9.querySelector(".overall-checkbox");
    let delButton = section9.querySelector(".del-button");
    let swapButton = section9.querySelector(".swap-button");

    allCheckBox.onclick = function(){
        let inputs = tbody.querySelectorAll("input[type='checkbox']");
        for(i in inputs){
            inputs[i].checked=allCheckBox.checked;
        }
        console.log(allCheckBox.checked);

    };

    delButton.onclick = function(){
        let inputs = tbody.querySelectorAll("input[type='checkbox']:checked");

        for(i in inputs)
        inputs[i].parentElement.parentElement.remove();
    };

    swapButton.onclick = function(){
        let inputs = tbody.querySelectorAll("input[type='checkbox']:checked");
        if(inputs.length!=2){
            alert("두개만 선택해야 합니다");
            return;
        }
        let trs = [];
        console.log(inputs);
        for(let i=0;i<inputs.length;i++){
        //for(i in inputs){ //<- 왜 에러가 날까요? 나머지 6개가 뭔지를 모르겠네
            trs.push(inputs[i].parentElement);
            console.log("inputs"+inputs);
        }
        let clonecolumn = trs[0].cloneNode(true);
        trs[1].replaceWith(clonecolumn);
        trs[0].replaceWith(trs[1]);

    };
})

window.addEventListener("load",function(){

    let notices = [
        {"id":1, "title":"유투브에 끌려다니지 않으려고 했는데....ㅜㅜ..", "regDate":"2019-02-05", "writerId":"newlec", "hit":2},
        {"id":2, "title":"자바스크립트란..", "regDate":"2019-02-02", "writerId":"newlec", "hit":0},
        {"id":3, "title":"기본기가 튼튼해야....", "regDate":"2019-02-01", "writerId":"newlec", "hit":1},
        {"id":4, "title":"근데 조회수가 ㅜㅜ..", "regDate":"2019-01-25", "writerId":"newlec", "hit":0}
    ];

    let section10 =document.querySelector("#section10");
    let noticeList = section10.querySelector(".notice-list");
    let titleId = section10.querySelector(".title");
    let tbodyNode = noticeList.querySelector("tbody");

    let bindData = function(){
        let template = section10.querySelector("template");
        for(let n in notices){
            let cloneNode = document.importNode(template.content,true);
            let tds = cloneNode.querySelectorAll("td");
            let aNode = tds[1].children[0];
            
            aNode.href=notices[n].id;
            tds[0].innerText = notices[n].id;
            aNode.innerText =notices[n].title;
            tds[2].innerText = notices[n].regDate;
            tds[3].innerText = notices[n].writerId; 
            tds[4].innerText = notices[n].hit;
            tbodyNode.appendChild(cloneNode);
        }
    }
    let titleSorted = false;
    
    titleId.onclick = function(){
        tbodyNode.innerHTML="";
       
        if(!titleSorted){
            notices.sort((a,b)=>{
                titleSorted = true;
                if(a.title<b.title)
                    return -1;
                else if(a.title>b.title)
                    return 1;
                else
                    return 0;
            });
        }else{
            notices.reverse();
        }
        
        bindData();
        
    };
    bindData();
})

