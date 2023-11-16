function print() {
  let a = document.getElementById('user');
  let name = 'Chirag';
  a.innerHTML = name;
}
window.onload = print;

function changecolor() {
  let a = document.getElementById('btn-click');
  a.style.color = 'pink';
}
function sentence(){
  let n = document.getElementById("noun").value;
  let v = document.getElementById("verb").value;
  let d = document.getElementById("adverb").value;
  let sent = n + " " + v + " " + d;
  document.getElementById("statement").innerHTML = sent;
  
}
document.getElementById("build-button").addEventListener("click", sentence)

document.getElementById("grandparent").addEventListener("click",function(){
  console.log("grandparent clicked");
});
document.getElementById("parent").addEventListener("click",function(){
  console.log("parent clicked");
});
document.getElementById("child").addEventListener("click",function(){
  console.log("child clicked");
});

document.getElementById("grandparent").addEventListener("click",function(){
  console.log("grandparent clicked");
},true);
document.getElementById("parent").addEventListener("click",function(){
  console.log("parent clicked");
}, true);
document.getElementById("child").addEventListener("click",function(){
  console.log("child clicked");
},true);
document.getElementById("category").addEventListener("click", function(){
  if(event.target.id === "blazers"){
    console.log("blazer")
  }
})