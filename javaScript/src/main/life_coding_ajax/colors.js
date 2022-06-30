var Links = {
  setColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $('a').css('color', color);
  }
}
var Body = {
  setColor:function (color){
    //document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor:function (color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}
function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';

    Links.setColor('white');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';

    Links.setColor('blue');
  }
}

// window.addEventListener("load",function(){
//   let ol = document.querySelector("ol")
//   let article = document.querySelector("article");
//   console.log();
//   ol.onclick = (e)=>{
//     if(e.target.nodeName!="A") return;
//     article.innerText ="<h2>HTML</h2> Html is ...";
//   };
// })

// 선택하는법 복습
// window.addEventListener("load",function(){
//   let container = document.querySelector(".container");
//   let doc = document.querySelector(".doc");
//   console.log(container);
//   console.log(doc);

//   container.onclick = (e)=>{
//     console.log(e.target.nodeName);
//     if(e.target.nodeName!="P") return;
//     doc.innerText = e.target.innerText;
//   };

// });


function fetchPage(name){
  console.log(name);
  fetch(name).then(function(response){
    response.text().then(function(text){
        document.querySelector('article').innerHTML = text;
        })
  })
};

if(location.hash){
  fetchPage(location.hash.substr(2));
}else{
  fetchPage('welcome');
};

fetch('list').then(function(response){
    response.text().then(function(text){
        document.querySelector('#nav').innerHTML = text;
      })
});