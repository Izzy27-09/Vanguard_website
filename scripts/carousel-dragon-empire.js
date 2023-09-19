const SLIDES = $(".slides2 > .slide2");
const DOTS=$(".circles>.circle")

function nextSlide() {
    console.log("NEXT BUTTON")
    let nextNum = SLIDES.index($(".slide2:not(.hidden)")) + 1 + 1; /* +1 for 0-index array */
    if (nextNum > SLIDES.length) {
      nextNum = 1;
    }
    showSlide(nextNum);
  }


function prevSlide() {
  let prevNum = SLIDES.index($(".slide2:not(.hidden)")) - 1 + 1; /* +1 for 0-index array */
  if (prevNum <= 0) {
     prevNum = SLIDES.length;
  }
     showSlide(prevNum);
  }


  /* See "show slide X snippet" to use */
function showSlide(num) {
    let index = num - 1;
    let currentSlide = SLIDES.eq(index);
    let currentDot=DOTS.eq(index);
    SLIDES.addClass("hidden");
    currentSlide.removeClass("hidden");
    DOTS.removeClass("active");
    currentDot.addClass("active");
  }

  $("#next2").click(function() {
    nextSlide();
  });

  $("#last2").click(function() {
    prevSlide();
  });

  $("#dot1").click(function(){
    showSlide(1);
  });

  $("#dot2").click(function(){
    showSlide(2);
  });

  $("#dot3").click(function(){
    showSlide(3);
  });
