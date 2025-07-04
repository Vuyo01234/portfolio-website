//alert("Wola, Ntanga!");//
//document.querySelector('lightbtn').onclick = function () {document.querySelector('body').classList.toggle('light');}
//document.querySelector('darkbtn').onclick = function () {document.querySelector('body').classList.toggle('dark');}
const lightbtn = document.getElementById("lightbtn");
const darkbtn = document.getElementById("darkbtn");
lightbtn.addEventListener("click", () => {
  document.body.classList.add("light");
  document.body.classList.remove("dark");
});
darkbtn.addEventListener("click", () => {
  document.body.classList.add("dark");
  document.body.classList.remove("light");
});

function scaleContent() {
  const content = document.getElementById("content");
  const scaleX = window.innerWidth / 1024;
  const scaleY = window.innerHeight / 768;
  const scale = Math.min(scaleX, scaleY);

  content.style.transform = `scale(${scale})`;
}

window.addEventListener("resize", scaleContent);
window.addEventListener("load", scaleContent);
