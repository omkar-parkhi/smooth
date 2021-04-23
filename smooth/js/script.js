var rellax = new Rellax('.rellax', {
    breakpoints:[576, 768, 1201]
  });

lightGallery(document.getElementById('lightgallery'));


$(document).ready(function(){
    //Code for showing the more gallery pictures
    $('.hidden').hide();
    $('.load-more').click(function(){
        $('.hidden').show('2000');
        $('.load-more').hide();
    });

    //code for changing website color
    $('.circle').click(function(){
        $('.hero').css({'background':'linear-gradient(45deg, rgba(0,0,0,0.7), rgba(34,193,195,0.6)), url(https://cdn.pixabay.com/photo/2015/09/02/13/18/person-918986_960_720.jpg), no-repeat','background-size':'100% 100%'})
        $('.circle').css({'background':'#fff',"-webkit-text-stroke-color":"#000","-moz-text-stroke-color":"#000"," color":"transparent"});
        $('.main').css("background","#000");
        $('h1').css("color","#fff");
        $('.about h1 span,.services h1 span,.gallery h1 span,.blog h1 span,.contact h1 span').css({"-webkit-text-stroke-color":"#fff","-moz-text-stroke-color":"#fff"," color":"transparent"});
        $('.about h3, .signature, .blog-content h3,.contact h3,.sp-1,i').css('color',"#fff");
        $('.page-link, .page-link span').css({"background-color":"#000","color":"#fff"});
        $('.current, .load-more,.contact-btn').css({'background':'white','color':'#000'});
        $('.load-more span').css('color','#000');
        $('.info').css('background','rgba(34,193,195,0.7)');
        $('.gal-pic').css('background','transparent');
    });
});