const SLIDES5=$(".slides6 >.slide6");
const DOTS5=$(".circles>.circle5");

function nextSlide5(){
    let nextNum = SLIDES5.index($(".slide6:not(.hidden)")) + 1 + 1; /* +1 for 0-index array */
    if (nextNum > SLIDES5.length) {
      nextNum = 1;
    }
    showSlide5(nextNum);
  }



  function prevSlide5() {
    let prevNum = SLIDES5.index($(".slide6:not(.hidden)")) - 1 + 1; /* +1 for 0-index array */
    if (prevNum <= 0) {
       prevNum = SLIDES5.length;
    }
       showSlide5(prevNum);
    }

    function showSlide5(num) {
        let index = num - 1;
        let currentSlide = SLIDES5.eq(index);
        let currentDot=DOTS5.eq(index);
        SLIDES5.addClass("hidden");
        currentSlide.removeClass("hidden");
        DOTS5.removeClass("active");
        currentDot.addClass("active");
      }

      $("#last5").click(function() {
        prevSlide5();
      });

      $("#next5").click(function() {
        nextSlide5();
      });

      $("#dot13").click(function(){
        showSlide5(1);
      });

      $("#dot14").click(function(){
        showSlide5(2);
      });

      $("#dot15").click(function(){
        showSlide5(3);
      });
