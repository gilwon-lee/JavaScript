// 자바스크립트에서 전역변수 사용은 좋은 방법이 아님
//window.onload = function(){
window.addEventListener("load",function(){
let btnPrint = document.getElementById("btn-print");
    btnPrint.onclick=
    function(){
        btnPrint.type="text";
    };
})