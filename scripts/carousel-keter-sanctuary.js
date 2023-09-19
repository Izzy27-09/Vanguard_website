const SLIDES3=$(".slides4 >.slide4");
const DOTS3=$(".circles>.circle3");

function nextSlide3(){
    let nextNum = SLIDES3.index($(".slide4:not(.hidden)")) + 1 + 1; /* +1 for 0-index array */
    if (nextNum > SLIDES3.length) {
      nextNum = 1;
    }
    showSlide3(nextNum);
  }




  function prevSlide3() {
    let prevNum = SLIDES3.index($(".slide4:not(.hidden)")) - 1 + 1; /* +1 for 0-index array */
    if (prevNum <= 0) {
       prevNum = SLIDES3.length;
    }
       showSlide3(prevNum);
    }

    function showSlide3(num) {
        let index = num - 1;
        let currentSlide = SLIDES3.eq(index);
        let currentDot=DOTS3.eq(index);
        console.log("Showing now")
        SLIDES3.addClass("hidden");
        currentSlide.removeClass("hidden");
        DOTS3.removeClass("active");
        currentDot.addClass("active");
      }

      $("#last3").click(function() {
        console.log("second left");
        prevSlide3();
      });

      $("#next3").click(function() {
        console.log(" second right right");
        nextSlide3();
      });

      $("#dot7").click(function(){
        showSlide3(1);
      });

      $("#dot8").click(function(){
        showSlide3(2);
      });

      $("#dot9").click(function(){
        showSlide3(3);
      });
