// mark todos complete by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("complete");
});

// clicking the X will delete the todo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

// add todo when enter is pushed inside input
$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    $("ul").append("<li><span>X</span> " + $(this).val() + "</li>");
    $(this).val("");
  }
});