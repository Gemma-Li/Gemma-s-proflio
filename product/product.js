function showLarge(e){
  let small = e.target;
  document.getElementById("large").src = small.src.replace("small","big").replace("SP_","");
}

function init(){
    let smallPics = document.querySelectorAll(".smallPics img");
    for( let i=0; i<smallPics.length; i++){
        smallPics[i].onclick = showLarge;
    }
}

window.onload = init;

//----------------------------------

function showword(e) {
  e.preventDefault();
  e.stopPropagation();
  document.getElementById("mask").style.height = document.body.clientHeight + "px";
  myAlert("成功加入購入購物車");
  document.getElementById("mask").style.opacity = "1";
  document.getElementById("mask").style.zIndex = "50";
  document.getElementById("dialog").style.top = $("#shop___item").offset().top + $("#shop___item").height() + "px";
  document.getElementById("dialog").style.opacity = "1";
  document.getElementById("dialog").style.zIndex = "100";
}

function myAlert(msg) {
  document.getElementById("dialog").style.display = "";
  document.querySelector("#dialog #msg").style.color = "#868773";
  document.querySelector("#dialog #msg").style.textAlign = "center";
  document.querySelector("#dialog #msg").innerHTML = msg;
  document.querySelector("#dialog #btnClose").onclick = function () {
      document.getElementById("dialog").style.top = "0px";
      document.getElementById("dialog").style.opacity = "0";
      document.getElementById("dialog").style.zIndex = "-1";
      document.getElementById("mask").style.opacity = "0";
      document.getElementById("mask").style.zIndex = "-10";
  }
  document.querySelector("#dialog #btn").onclick = function () {
      document.getElementById("dialog").style.top =  "2px";
      document.getElementById("dialog").style.opacity = "0";
      document.getElementById("dialog").style.zIndex = "-1";
      document.getElementById("mask").style.opacity = "0";
      document.getElementById("mask").style.zIndex = "-10";
  }
  document.querySelector("#mask").onclick = function () {
      document.getElementById("dialog").style.top = "0px";
      document.getElementById("dialog").style.opacity = "0";
      document.getElementById("dialog").style.zIndex = "-1";
      document.getElementById("mask").style.opacity = "0";
      document.getElementById("mask").style.zIndex = "-10";
  }
}

document.getElementById("plus_cart").addEventListener("click", showword);

