const cards = [
  {
      "title" : "Discord-Arduino Car",
      "text" : "A robot car that uses discord commands (through a discord.py bot) to control itself. This allows anybody in a server to control my robot.",
      "link" : "https://github.com/Yello12/Greg-Bot"
  },
  {
      "title" : "Discord-Twitter Bot",
      "text" : "A bot that communicates via rest APIs to send tweets from Discord to one account. Anybody in a Discord server with the bot can send tweets anonymously, making a fun and interesting time.",
      "link" : "https://github.com/Yello12?tab=repositories"
  },
  {
      "title" : "Portfolio Website",
      "text" : "A website to display all my projects and my coding stories I have picked up along the way.",
      "link" : "https://github.com/Yello12/Portfolio-Site"
  },
  {
    "title" : "Discord-Workout Bot",
    "text" : "A bot that can set timers, rest breaks, and make a workout routine for you and your friends to simultaneously workout while social distancing.",
    "link" : "https://github.com/Yello12/Portfolio-Site"
  },
  {
    "title" : "Programmable Arduino Car",
    "text" : "A robot car that does not use a servo to turn, but instead uses a scrip to mathematically calculate functions to change the speed of each motor and emulate an actualy RC car.",
    "link" : "https://github.com/Yello12/Project-Tokyo"
  },
  {
    "title" : "North East Trading Co.",
    "text" : "A video game that uses an emulated parser to parse commands and let the player control his own business economy.",
    "link" : "https://yello12.github.io/TerminalTrading/"
  },
  {
    "title" : "Arduino Controlled Robot Arm",
    "text" : "An Arduino controlled robot arm that can be controlled via an Xbox One Controller.",
    "link" : "https://github.com/Yello12?tab=repositories"
  }
]
var html_a = "";
var html_c = "";
for (card = 0; card < cards.length; card++) {
  const title = cards[card].title;
  const text = cards[card].text;
  const link = cards[card].link;
  const added = "<div class = 'card'><a href = " + link + "><h1 class = 'card-header'>" + title + "</h1><p class = 'card-body'>" + text + "</p><h1 class = 'card-body'>Click on this card to see more!</h1></a></div>";
  if (card < 3) { html_a += added; }
  html_c += added;
}

var card_a = document.getElementById("c_a");
if(card_a !== 'undefined' && card_a != null) {card_a.innerHTML = html_a;}
var card_c = document.getElementById("c_h");
if(card_c !== 'undefined' && card_c != null) {card_c.innerHTML = html_c;}