angular.module('resumeApp',['resumeController']);


$(document).on('click', 'a', function(event){
    // event.preventDefault();
    console.log($.attr(this, 'href'));
    if(!($.attr(this, 'href').match(/^#/)) ) {
    }

    else
    if($.attr(this, 'href')=="#home") {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 500);
    }
    else {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
      }
});
