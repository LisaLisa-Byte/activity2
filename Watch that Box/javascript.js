console.log("connected ... ");
console.log('connected ... 2');

document.getElementById("button1").addEventListener("click", function () {
  document.getElementById("box").style.height = "200px";
  document.getElementById("box").style.width = "200px";
  document.getElementById("box").style.margin = "30px";
  console.log('clicked');
});

document.getElementById("button2").addEventListener("click", function () {
  document.getElementById("box").style.backgroundColor = "blue"
});

document.getElementById("button3").addEventListener("click", function () {
  document.getElementById("box").style.height = "150px";
});

document.getElementById("button3").addEventListener("click", function () {
    document.getElementById("box").style.opacity = "0.5"
});

document.getElementById("button4").addEventListener("click", function () {
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor = "orange"
    document.getElementById("box").style.margin = "20px";
    document.getElementById("box").style.opacity = "1.0";
  });


console.log('connected ... 3');