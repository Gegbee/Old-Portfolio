var nav = document.getElementsByClassName("link_button");

function minimize() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        for (n = 0; n < nav.length; n++) {
            nav[n].style.opacity = 0;
            nav[n].style.pointerEvents = "none";
        }
      } else {
        for (n = 0; n < nav.length; n++) {
            nav[n].style.opacity = 1;
            nav[n].style.pointerEvents = "auto";
        }
      }
    }
window.onscroll = function() {minimize();};