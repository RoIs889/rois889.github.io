window.onscroll=function(){
scrollFunction();
}
function scrollFunction(){
  if (document.body.scrollTop>80||document.documentElement.scrollTop>80){
    document.getElementById("header").style.visibility = "visible"
  }
  else{
  document.getElementById("header").style.visibility = "hidden"
}
}
