const pics = [
    { 
        "photo" : "pictures/robotArm.jpg",
        "caption" : "The robot arm used with my robot arm project"
    },
    { 
        "photo" : "pictures/robotCar.jpg",
        "caption" : "The robot car for the Discord-Arduino Project"
    },
    { 
        "photo" : "pictures/robotArmv2.jpg",
        "caption" : "An improved robot arm (lighter and sturdier)."
    }
]

var html_p = "";

for (pic = 0; pic < pics.length; pic++) {
  const img = pics[pic].photo;
  const caption = pics[pic].caption;
  const added = "<div class = 'card'><img class = 'card_img' src = " + img + "><h1 class = 'card-body'>" + caption + "</h1></div>";
  html_p += added;
}

var pic_h = document.getElementById("c_p");
if(pic_h !== 'undefined' && pic_h != null) {pic_h.innerHTML = html_p;}