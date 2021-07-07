'use strict';

//open modal
var modales = $(".myBtn");
var closeModal = $('.close');

function handlerClickModal() {
    $('body').addClass('no-scroll');
    const idModal = $(this).attr("id");
    const modal = $('.'+idModal);
    modal.css("z-index","5000");
    modal.css("background" , "rgba(0,0,0,0.6)");
    const tlModal = gsap.timeline();
    tlModal.to(modal, .5, { opacity: 1})
    .to(".modal-content", .5, {opacity: 1, y:0, ease: Power1.easeOut },'-=.5')
    .to(".modal-content h3", .5, {opacity: 1, ease: Power1.easeOut },'-=.5')
    .to(".modal-content p", .5, {opacity: 1, y:20, ease: Power1.easeOut },'-=.5');
   
    $(document).keydown(function(event) { 
      if (event.keyCode == 27) { 
        $('body').removeClass('no-scroll');
       modal.css("z-index","-1");
       TweenMax.to(modal, 0.2, { opacity: 0});
       TweenMax.to(".modal-content", 0.5, {ease: Power1.easeOut });
      }
    });

   closeModal.on("click",function() {
       $('body').removeClass('no-scroll');
       modal.css("z-index","-1");
       TweenMax.to(modal, 0.2, { opacity: 0});
       TweenMax.to(".modal-content", 0.5, {ease: Power1.easeOut });
    });
    
}
for (var i = 0 ; i < modales.length; i++) {
  modales[i].addEventListener('click' , handlerClickModal , false ) ; 
}