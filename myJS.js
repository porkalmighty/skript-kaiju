jQuery(document).ready(function(){
  // animating the scroll so when a user clicks a link, the transition would be smooth insteead of just jumping
  jQuery(".section-links, #scrollToTop").click(function(e) {
    e.preventDefault();
    var scrollTo = jQuery(this).attr('href');
    var offset;

    if(scrollTo.length) {
      // switch ID
      switch(scrollTo) {
        case "#home":
          offset = 0;
          break;
        default:
          offset = jQuery(scrollTo).offset().top - 90;
          break;
      }

      //apply offset
      jQuery("html, body").stop().animate({ scrollTop: offset }, 800);
    }
  });
  jQuery(window).scroll(scrollEvents);
});

function scrollEvents(){
  var scrollValue = jQuery(window).scrollTop();
  if(scrollValue === 0) {
    jQuery('#header').removeClass('sticky');
    console.log('removed');
  } else {
    jQuery('#header').addClass('sticky');
  }

  if(scrollValue > 300) {
    jQuery('#scrollToTop').removeClass('hidden');
  }else {
    setTimeout(function(){jQuery('#scrollToTop').addClass('hidden');}, 300);
  }
}
/*
 * code references fpr scroll to top and link animation
 * https://www.abeautifulsite.net/smoothly-scroll-to-an-element-without-a-jquery-plugin-2
 * https://www.templatemonster.com/blog/back-to-top-button-css-jquery/
**/
