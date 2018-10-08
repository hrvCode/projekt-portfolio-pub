window.onload = function(){
  //scroll event for navbar
  stickyNav('.container');
  slideInContent();
  timeInTable();
  window.addEventListener('scroll', () => {
    stickyNav('.container');
    slideInContent();
    timeInTable();
  })
  // STICKY NAV BAR
  // HiddenNav made for not getting those "spicky" feelings while dropping the navbar back to relative.
  function stickyNav(target){
    target = document.querySelector(target);
    let hiddenNav = document.querySelector(".hiddenNav");
    let targetPosition = target.getBoundingClientRect().top;
    let aboutPushNav = document.querySelector("#about");

    if(targetPosition < 56){
      if(window.matchMedia("(min-width: 700px)").matches){
        hiddenNav.style.display = "block";
        aboutPushNav.style.padding = "0px 0px 0px 0px";
        let navbar =  document.querySelector("#navbar")
        navbar.classList.add('sticky-nav');
      }
    }else if(targetPosition > 56){
      hiddenNav.style.display = "none";
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
    if(slide1Distance < 300 ){
        slide.style.left = "0";
        slide.style.transition = "left ease 0.9s";
    }
  })
}

function timeInTable(){
  let table = document.querySelector(".flex-table")
  let distanceOfTableTop = table.getBoundingClientRect().top;
    if(distanceOfTableTop <  200 ){
      tableSlide();
    }
}

function tableSlide(){
  let rowRange = document.querySelectorAll(".rowRange");
  let widthResult = [];
  let rows = document.querySelectorAll(".row");
  rowRange.forEach((row)=>{
      widthResult.push(row.textContent.slice(0,2));
  })
  for(let i = 0; i < rows.length; i++){
    rows[i].style.opacity = "100";
    rows[i].style.width = widthResult[i] + "%";
    console.log(rows[i])
    rows[i].style.transition = "all ease 2.5s";
  }
}
// OLD slide
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
