$("#notifications").text($(".unread").length);

$(".unread").click(function(){
    $(this).removeClass("unread");
    $("#notifications").text($(".unread").length);
});

$(".mark_all").click(function(){
    $(".unread").removeClass("unread");
    $("#notifications").text($(".unread").length);
});