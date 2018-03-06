$(document).ready(function(){
  var hide=false;
  $(".project").click(function(){
    if(hide==false && $(window).width()>550){
      //no highlights under 551px
      $("body").addClass("disabled");
      $(this).addClass("highlights");
    }
  });
  $("body").click(function(){
    if(hide==true){
      $(".project").removeClass("highlights");
      $(this).removeClass("disabled");
      hide=false;
    }else if($(window).width()>550){
      hide=true;
    }
  });
  $( window ).resize(function() {
    //in case someone select a project and resize the windows
    if($(this).width()<551){
      $(".project").removeClass("highlights");
      $("body").removeClass("disabled");
    }
  });
});
