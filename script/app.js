$('nav a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        targetoffset = $(id).offset().top
        console.log(id)
    $('html, body').animate({scrollTop: targetoffset}, 500)
})  