$(document).ready(function() {
  var whirlaroundHeight = 40,
  rollercoasterHeight = 60,
  teacupsHeight = 45,
  bumpercarsHeight = 42,
  zipperHeight = 55;

  $("#heightInput").on('input', function(){
    var height = parseInt($("#heightInput").val());
    if( height >= whirlaroundHeight){
      $(".whirlaround").show();
    }else $(".whirlaround").hide();
    if( rollercoasterHeight <= height){
      $(".rollercoaster").show();
    } else $(".rollercoaster").hide();
    if(height >= teacupsHeight){
      $(".teacups").show();
    } else $(".teacups").hide();
    if(height >= bumpercarsHeight){
      $(".bumpercars").show();
    } else $(".bumpercars").hide();
    if(height >= zipperHeight){
      $(".zipper").show();
    } else $(".zipper").hide();
  });
});
