const SLIDES4=$(".slides5 >.slide5");
const DOTS4=$(".circles>.circle4");

function nextSlide4(){
    let nextNum = SLIDES4.index($(".slide5:not(.hidden)")) + 1 + 1; /* +1 for 0-index array */
    if (nextNum > SLIDES4.length) {
      nextNum = 1;
    }
    showSlide4(nextNum);
  }



  function prevSlide4() {
    let prevNum = SLIDES4.index($(".slide5:not(.hidden)")) - 1 + 1; /* +1 for 0-index array */
    if (prevNum <= 0) {
       prevNum = SLIDES4.length;
    }
       showSlide4(prevNum);
    }

    function showSlide4(num) {
        let index = num - 1;
        let currentSlide = SLIDES4.eq(index);
        let currentDot=DOTS4.eq(index);
        SLIDES4.addClass("hidden");
        currentSlide.removeClass("hidden");
        DOTS4.removeClass("active");
        currentDot.addClass("active");
      }

      $("#last4").click(function() {
        console.log("second left");
        prevSlide4();
      });

      $("#next4").click(function() {
        console.log(" second right right");
        nextSlide4();
      });


      $("#dot10").click(function(){
        showSlide4(1);
      });

      $("#dot11").click(function(){
        showSlide4(2);
      });

      $("#dot12").click(function(){
        showSlide4(3);
      });
