jQuery(document).ready(function(){
  // animating the scroll so when a user clicks a link, the transition would be smooth insteead of just jumping
  jQuery(".section-links, #scrollToTop").click(function() {
    var scrollTo = jQuery(this).attr('href');
      jQuery("html, body").animate({
          scrollTop: jQuery(scrollTo).offset().top
      }, 1200);
  });

  jQuery(window).scroll(function(){
    var scrollValue = jQuery(window).scrollTop();

    if(scrollValue > 300) {
      jQuery('#scrollToTop').removeClass('hidden');
    }else {
      setTimeout(function(){jQuery('#scrollToTop').addClass('hidden');}, 500);
    }
  });
});

/*
 * code references fpr scroll to top and link animation
 * https://www.abeautifulsite.net/smoothly-scroll-to-an-element-without-a-jquery-plugin-2
 * https://www.templatemonster.com/blog/back-to-top-button-css-jquery/
**/
