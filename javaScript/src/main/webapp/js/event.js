//section7
//여러개 박스 옮기기
window.addEventListener("load",function(){
    let section =document.querySelector("#section8");
    let container =section.querySelector(".container");
    let box =section.querySelector(".box");
    let dragging =false;
    let offset ={x:0,y:0};
    let current = null;
    container.onmousedown =(e)=>{
        // === ->value
        if(e.target.classList.contains("box")){
            dragging =true;
            current = e.target;
            offset.x= e.offsetX;
            offset.y= e.offsetY;
            console.log(e.target);
        }
    };

    container.onmouseup =(e)=>{
        dragging =false;
    };
    container.onmousemove =(e)=>{
        if(dragging){
            current.style.left=e.pageX-offset.x+"px";
            current.style.top=e.pageY-offset.y+"px";
        }
    };

})

//section7
//드래그로 박스 옮기기
window.addEventListener("load",function(){
    let section =document.querySelector("#section7");
    let container =section.querySelector(".container");
    let box =section.querySelector(".box")
    let dragging =false;
    let offset ={x:0,y:0};
    container.onmousedown =(e)=>{
        // === ->value
        if(e.target===box)
        dragging =true;
    };

    container.onmouseup =(e)=>{
        dragging =false;
    };
    container.onmousemove =(e)=>{
        if(dragging){
         box.style.left=e.pageX-offset.x+"px";
         box.style.top=e.pageY-offset.y+"px";
        }
    };

    box.onmousedown =(e)=>{
        offset.x= e.offsetX;
        offset.y= e.offsetY;
    };
})

//section6
//Mouse trigger
window.addEventListener("load",function(){
    let section =document.querySelector("#section6");
    let container =section.querySelector(".container");
    let box =section.querySelector(".box")

    container.onclick =(e)=>{
        // console.log(e.x,e.y);
        // console.log(e.clientX,e.clientY);
        // console.log(e.pageX,e.pageY);
        // console.log(e.offsetX,e.offsetY);
        //기본적으로 static
        box.style.position="absolute";
        //단순 숫자를 넣으면 적용이 안됨
        box.style.left =e.pageX+"px";
        box.style.top=e.pageY+"px";
    }
})


//section5
//trigger
window.addEventListener("load",function(){
    let section =document.querySelector("#section5");
    let fileButton =section.querySelector(".file-button");
    let fileTriggerButton =section.querySelector(".file-trigger-button")

    fileTriggerButton.onclick =(e)=>{
        let event = new MouseEvent("click",{
            'view':window,
            'bubbles':true,
            'cancelable':true
        })
        fileButton.dispatchEvent(event);

    }
})


//section4 
//append -> String을 사용하여 태그나 항목을 추가할 때 사용
//여러가지의 태그를 한꺼번에 추가 할 수 있음
//appendChild -> 노드 객체를 추가할 때 사용
//1가지 노드만 추가할 수 있음 
window.addEventListener("load",function(){

    let notices = [
        {"id":1, "title":"유투브에 끌려다니지 않으려고 했는데....ㅜㅜ..", "regDate":"2019-02-05", "writerId":"newlec", "hit":2},
        {"id":2, "title":"자바스크립트란..", "regDate":"2019-02-02", "writerId":"newlec", "hit":0},
        {"id":3, "title":"기본기가 튼튼해야....", "regDate":"2019-02-01", "writerId":"newlec", "hit":1},
        {"id":4, "title":"근데 조회수가 ㅜㅜ..", "regDate":"2019-01-25", "writerId":"newlec", "hit":0}
    ];

    let section1 =document.querySelector("#section4");
    let noticeList = section1.querySelector(".notice-list");
    let tbodyNode = noticeList.querySelector("tbody");

    let bindData = function(){
        let template = section1.querySelector("template");
        for(let n in notices){
            let cloneNode = document.importNode(template.content,true);
            let tds = cloneNode.querySelectorAll("td");
            let select = document.createElement("input");
            let edit = document.createElement("input");
            let del = document.createElement("input");
            select.className="sel-button";
            select.value="선택";
            select.type="button";
            edit.className="edit-button";
            edit.value="수정";
            edit.type="button";
            del.className="del-button";
            del.value="삭제";
            del.type="button";

            let aNode = tds[1].children[0];
            
            aNode.href=notices[n].id;
            tds[0].innerText = notices[n].id;
            aNode.innerText =notices[n].title;
            tds[2].innerText = notices[n].regDate;
            tds[3].innerText = notices[n].writerId; 
            tds[4].innerText = notices[n].hit;
            tds[5].append(select,edit,del);
            tbodyNode.appendChild(cloneNode);
        }
    }
    bindData();

    tbodyNode.onclick = (e)=>{
        let target = e.target;
        if(target.nodeName!="INPUT") 
        return;
        console.log(target.classList.contains("sel-button"));
        if(target.classList.contains("sel-button")){
            let tr=target.parentElement;
            for(;tr.nodeName!="TR"; tr=tr.parentElement);
            tr.style.background="yellow";
        }else if(target.classList.contains("edit-button")){

        }else if(target.classList.contains("del-button")){
            target.parentElement.parentElement.remove();
        }else{
            console.log(tr.nodeName);
        }

        
     };

})

//section3
// 자식에 있는 이벤트를 실행 할 때 부모에 있는 이벤트 또한 실행되기 때문에
// 자식 각각의 이벤트를 실행하게 함 
// 버블링
window.addEventListener("load",function(){
    let section = document.querySelector("#section3");

    //let img = section.querySelectorAll(".img");
    let imgList = section.querySelector(".img-list");
    let currentImg = section.querySelector(".current-img");
    let addButton = section.querySelector(".add-button");

    imgList.onclick = (e)=>{
        if(e.target.nodeName!="IMG") return;
        currentImg.src = e.target.src;
    }
    addButton.onclick = (e)=>{
        e.stopPropagation();
        let img = this.document.createElement("img");
        img.src = "../img/1.jpg"
        currentImg.insertAdjacentElement("afterend",img);
    }
})

//section2
//이미지 선택
window.addEventListener("load",function(){
    let section = document.querySelector("#section2");

    let img = section.querySelectorAll(".img");
    let imgList = section.querySelector(".img-list");
    let currentImg = section.querySelector(".current-img");

    imgList.onclick = (e)=>{
        if(e.target.nodeName!="IMG") return;
        currentImg.src = e.target.src;
    }
   /* for(let i=0;i<imgs.length;i++){
    imgs[i].onclick = (e)=>{
        currentImg.src = e.target.src;
    };
    };*/
})

//section1 
window.addEventListener("load",function(){

    let notices = [
        {"id":1, "title":"유투브에 끌려다니지 않으려고 했는데....ㅜㅜ..", "regDate":"2019-02-05", "writerId":"newlec", "hit":2},
        {"id":2, "title":"자바스크립트란..", "regDate":"2019-02-02", "writerId":"newlec", "hit":0},
        {"id":3, "title":"기본기가 튼튼해야....", "regDate":"2019-02-01", "writerId":"newlec", "hit":1},
        {"id":4, "title":"근데 조회수가 ㅜㅜ..", "regDate":"2019-01-25", "writerId":"newlec", "hit":0}
    ];

    let section1 =document.querySelector("#section1");
    let noticeList = section1.querySelector(".notice-list");
    let tbodyNode = noticeList.querySelector("tbody");

    let bindData = function(){
        let template = section1.querySelector("template");
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
            tds[5].innerHTML = "<input type='button' class='delete' value='삭제'>";
            tbodyNode.appendChild(cloneNode);
        }
    }
    bindData();
    noticeList.onclick = (e)=>{
        console.log(e.target.nodeName);
        if(e.target.className!='delete') return;
        e.target.parentElement.parentElement.remove();
    };
    
    // for(let i=0;i<deleteButton.length;i++){
    //     deleteButton[i].onclick =(e)=>{
    //         e.target.parentElement.parentElement.remove();
    //     }
    // };
})