const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const body=document.querySelector("body");
const dark=document.querySelector(".dark");
const light=document.querySelector(".light");

const btn=document.querySelector("#thems");
let lightmode=localStorage.getItem('lightmode');

const enableDarkMode=()=>{
  document.body.classList.remove("lightmode");
  localStorage.setItem("lightmode","active");
}
const disableDarkMode=()=>{
  document.body.classList.add("lightmode");
  localStorage.setItem("lightmode","null");
}

if(lightmode==="active") enableDarkMode();

btn.addEventListener("click",()=>{
  lightmode=localStorage.getItem("lightmode");
  if(lightmode!="active"){
    enableDarkMode();
  }else{
    disableDarkMode();
  }
})

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const joinbtn=document.querySelector(".joinbtn");

joinbtn.addEventListener("click",()=>{
  btnClick();
})

function btnClick(){
  const joinForm=document.querySelector(".join-form");
  const close=document.querySelector("#close");
  joinForm.style.display="flex";

  close.addEventListener("click",()=>{
    joinForm.style.display="none";
  })
}

