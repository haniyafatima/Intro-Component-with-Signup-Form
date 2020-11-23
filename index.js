var fname= document.querySelector("#fname");
var lname= document.querySelector("#lname");
var email= document.querySelector("#email");
var password= document.querySelector("#password");


document.querySelector("#but").addEventListener("click" , function(){
if(fname.value=== ""){
  document.querySelectorAll(".error")[0].style.display="block";
  document.querySelectorAll(".error")[1].style.display="block";
  document.querySelectorAll("input")[0].style.borderColor=" hsl(0, 100%, 74%)";
}else{
  document.querySelectorAll(".error")[0].style.display="none";
  document.querySelectorAll(".error")[1].style.display="none";
}
if(lname.value===""){
  document.querySelectorAll(".error")[2].style.display="block";
  document.querySelectorAll(".error")[3].style.display="block";
  document.querySelectorAll("input")[1].style.borderColor=" hsl(0, 100%, 74%)";

}else {
  document.querySelectorAll(".error")[2].style.display="none";
  document.querySelectorAll(".error")[3].style.display="none";
}
if(email.value=== ""){
  document.querySelectorAll(".error")[4].style.display="block";
  document.querySelectorAll(".error")[5].style.display="block";
  document.querySelectorAll("input")[2].style.borderColor=" hsl(0, 100%, 74%)";


}else{
  document.querySelectorAll(".error")[4].style.display="none";
  document.querySelectorAll(".error")[5].style.display="none";
}
if(password.value===""){
  document.querySelectorAll(".error")[6].style.display="block";
  document.querySelectorAll(".error")[7].style.display="block";
  document.querySelectorAll("input")[3].style.borderColor=" hsl(0, 100%, 74%)";

}else{
  document.querySelectorAll(".error")[6].style.display="none";
  document.querySelectorAll(".error")[7].style.display="none";
}


});

















// var valueV= document.querySelectorAll("input").getAttribute("value");
// var buttonTwo= document.getElementsByClassName("button-two");
// var wrongG= document.getElementById("wrong");
//
// function buttonClick(){
//   buttonTwo.addEventListener("click" , function(){
//   if(valueV=== null){
//     wrongG.style.display ==="block"
//   }else{
//     wrongG.style.display ==="none";}
//    });
//
//
//
// }


// console.log(error);
