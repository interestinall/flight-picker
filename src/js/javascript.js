// comment this comment

$(function() {
    $( "#radio" ).buttonset();
    $( "#adults" ).selectmenu({
    	width: 75
    });
    $( "#children").selectmenu({
    	width: 85
    });
    $( "#dd").datepicker();
    $( "#rd").datepicker();
  });

 $(document).ready(function(){
 $( "#radio2" ).change(function() {
      $( ".r-date" ).hide();
      $( ".multiple" ).addClass( "hide" );
      console.log("radio two triggered");
    });

 $( "#radio1" ).change(function() {
      $( ".r-date" ).show();
       $( ".multiple" ).addClass( "hide" );
      console.log("radio one triggered");
    });

 $( "#radio3" ).change(function() {
      $( ".multiple" ).removeClass("hide");
      $( ".r-date" ).hide();
      $(".wrapper").removeClass("wrapper").addClass("wrapper-big");
      $(".flight-picker").removeClass("flight-picker").addClass("flight-picker-big");


      console.log("radio three triggered");
    });  

 });