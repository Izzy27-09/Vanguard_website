// taken from https://stackoverflow.com/questions/17422872/jquery-can-you-check-to-see-if-a-class-has-another-class
$("#vanread").click(function(){
    if ($(".cards").hasClass("hidden")) {
        $(".cards").removeClass("hidden");
      } else {
        $(".cards").addClass("hidden");
      }

});

$("#natride").click(function(){
    if ($(".nations").hasClass("hidden")) {
        $(".nations").removeClass("hidden");
      } else {
        $(".nations").addClass("hidden");
      }

});

$("#rulefield").click(function(){
  if ($(".field").hasClass("hidden")) {
      $(".field").removeClass("hidden");
    } else {
      $(".field").addClass("hidden");
    }

});

$("#icon").click(function(){
  if ($(".icons").hasClass("hidden")) {
      $(".icons").removeClass("hidden");
    } else {
      $(".icons").addClass("hidden");
    }

});
