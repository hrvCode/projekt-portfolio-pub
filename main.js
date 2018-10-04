window.onload = function(){
  //scroll event for navbar

  window.addEventListener('scroll', () => {
    stickyNav('.container');
    slideInContent();
  })
  // STICKY NAV BAR

  function stickyNav(target){
    target = document.querySelector(target);
    let targetPosition = target.getBoundingClientRect().top;
    let aboutPushNav = document.querySelector("#about");

    if(targetPosition < 110){
      if(window.matchMedia("(min-width: 700px)").matches){
        aboutPushNav.style.padding = "100px 0px 0px 0px";
        let navbar =  document.querySelector("#navbar")
        navbar.classList.add('sticky-nav');
      }
    }else if(targetPosition > 110){
      navbar.classList.remove('sticky-nav');
      aboutPushNav.style.margin = "0 auto";
    }
  }
}

// SLIDE CONTENT
function slideInContent(){
  let slides = document.querySelectorAll('.slides');
  slides.forEach((slide) => {
    //console.log(slide)
    let slide1Distance = slide.getBoundingClientRect().top;
    // console.log(slide1Distance);
    if(slide1Distance < 350 ){
        slide.style.left = "0";
        slide.style.transition = "left ease 0.9s";
    }
  })
}


//   let slideBox = document.querySelectorAll(".slides");
//   let counter = 0;
//   let loop = setInterval(function(){
//     if(counter === 3){
//       clearInterval(loop);
//     }else{
//       slideBox[counter].style.left = "0";
//       slideBox[counter].style.transition = "left ease 0.9s";
//       counter++;
//     }
//   },500)
//
