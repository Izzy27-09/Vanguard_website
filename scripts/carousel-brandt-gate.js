const SLIDES2=$(".slides3 >.slide3");
const DOTS2=$(".circles>.circle2");

function nextSlide2(){
    let nextNum = SLIDES2.index($(".slide3:not(.hidden)")) + 1 + 1; /* +1 for 0-index array */
    if (nextNum > SLIDES2.length) {
      nextNum = 1;
    }
    showSlide2(nextNum);
  }

  function prevSlide2() {
    let prevNum = SLIDES2.index($(".slide3:not(.hidden)")) - 1 + 1; /* +1 for 0-index array */
    if (prevNum <= 0) {
       prevNum = SLIDES2.length;
    }
       showSlide2(prevNum);
    }

    function showSlide2(num) {
        let index = num - 1;
        let currentSlide = SLIDES2.eq(index);
        let currentDot=DOTS2.eq(index);
        console.log("Showing now")
        SLIDES2.addClass("hidden");
        currentSlide.removeClass("hidden");
        DOTS2.removeClass("active");
        currentDot.addClass("active");
      }

      $("#last").click(function() {
        console.log("second left");
        prevSlide2();
      });

      $("#next").click(function() {
        console.log(" second right right");
        nextSlide2();
      });

      $("#dot4").click(function(){
        showSlide2(1);
      });

      $("#dot5").click(function(){
        showSlide2(2);
      });

      $("#dot6").click(function(){
        showSlide2(3);
      });
