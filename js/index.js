$(document).ready(function(){
    $("div.grid-item").mouseenter(function() {
        $(this).find('div.text-block-img').stop().show();
    });

    $("div.grid-item").mouseleave(function() {
        $(this).find('div.text-block-img').hide();
    });
});