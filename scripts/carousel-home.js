const SLIDES0=$(".trigger-car >.slide1");
const DOTS0=$(".circles>.circle");

function nextSlide0(){
    let nextNum = SLIDES0.index($(".slide1:not(.hidden)")) + 1 + 1; /* +1 for 0-index array */
    if (nextNum > SLIDES0.length) {
      nextNum = 1;
    }
    showSlide0(nextNum);
  }

  function prevSlide0() {
    let prevNum = SLIDES0.index($(".slide1:not(.hidden)")) - 1 + 1; /* +1 for 0-index array */
    if (prevNum <= 0) {
       prevNum = SLIDES0.length;
    }
       showSlide0(prevNum);
    }

    function showSlide0(num) {
        let index = num - 1;
        let currentSlide = SLIDES0.eq(index);
        let currentDot=DOTS0.eq(index);
        SLIDES0.addClass("hidden");
        currentSlide.removeClass("hidden");
        DOTS0.removeClass("active");
        currentDot.addClass("active");
      }

      $("#last0").click(function() {
        prevSlide0();
      });

      $("#next0").click(function() {
        nextSlide0();
      });

      $("#dott1").click(function(){
        showSlide0(1);
      });

      $("#dott2").click(function(){
        showSlide0(2);
      });

      $("#dott3").click(function(){
        showSlide0(3);
      });

      $("#dott4").click(function(){
        showSlide0(4);
      });

      $("#dott5").click(function(){
        showSlide0(5);
      });
