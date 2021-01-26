const cards = [
  {
      "title" : "Discord-Arduino Car",
      "text" : "A robot car that uses discord commands (through a discord.py bot) to control itself.",
      "link" : "https://github.com/Yello12/Greg-Bot"
  },
  {
      "title" : "Discord-Twitter Bot",
      "text" : "A bot that communicates via rest APIs to send tweets from Discord to one account.",
      "link" : "https://github.com/Yello12?tab=repositories"
  },
  {
      "title" : "Portfolio Website",
      "text" : "A website to display all my projects and my coding stories I have picked up along the way.",
      "link" : "https://github.com/Yello12/Portfolio-Site"
  }
]
var html_insert = "";

for (card = 0; card < 3; card++) {
  const title = cards[card].title;
  const text = cards[card].text;
  const link = cards[card].link;
  html_insert += "<div class = 'card'><a href = " + link + "><h1 class = 'card-header'>" + title + "</h1><p class = 'card-body'>" + text + "</p><h1 class = 'card-body'>Click on this card to see more!</h1></a></div>";
}

var card_holder = document.getElementById("c_h");
card_holder.innerHTML = html_insert;