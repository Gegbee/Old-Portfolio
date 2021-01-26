var nav = document.getElementsByClassName("link_button");
function minimize() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        for (n = 0; n < nav.length; n++) {
            nav[n].style.opacity = 0;
        }
      } else {
        for (n = 0; n < nav.length; n++) {
            nav[n].style.opacity = 1;
        }
      }
    }
window.onscroll = function() {minimize();};