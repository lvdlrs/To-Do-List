//Check Off Specific Todos by CLicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
   event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event){
    if(event.which === 13){
        //grabbing new todo
        var todoText = $(this).val();
        $(this).val("");
        //create new li and add to ul
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
    }
});

$("#change").on("click", function(){
    $("input[type = 'text']").fadeToggle();
    if($(this).hasClass("fa-times")){
        $("#change").removeClass("fa-times").fadeIn(3000, function(){
           $(this).addClass("fa-pencil-alt");
        });
        $("#change").attr("title", "Add To Do");
    }else{
        $("#change").removeClass("fa-pencil-alt").fadeIn(3000, function(){
        $("#change").addClass("fa-times");});
        $("#change").attr("title", "Close To Do");
    }
});