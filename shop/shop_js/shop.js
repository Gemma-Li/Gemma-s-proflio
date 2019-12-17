
// $('.product_sm img').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3
//   });


function showword(e) {
  e.preventDefault();
  e.stopPropagation();
  document.getElementById("mask").style.height = document.body.clientHeight + "px";
  myAlert("成功加入購入購物車");
  document.getElementById("mask").style.opacity = "1";
  document.getElementById("mask").style.zIndex = "50";
  document.getElementById("dialog").style.top = $("#plus_cart").offset().top + $("#plus_cart").height() + "px";
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

