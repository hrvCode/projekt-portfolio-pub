window.onload = function(){
  let boxElement = document.querySelectorAll(".box");
  let counter = 0;
  let loop = setInterval(function(){
    if(counter === 3){
      clearInterval(loop);
    }else{
      boxElement[counter].style.left = "0";
      boxElement[counter].style.transition = "left ease 0.9s"
      counter++;
    }
  },500)
}
