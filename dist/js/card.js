var dcCards = document.querySelector(".js-card");

var heroName = [
	"準備設立公司者",
	"經營管理者",
	"有交易對象者",
	"與政府部門交涉者",
	"投資大陸及涉大陸法律事務",
	"企業轉型",
	"正臨各類營運疑難雜症者"
];

var altName = [

];




var comicCard = "";
for (i = 0; i < heroName.length; i++) {
	comicCard +=
		"<div class='card'><div class='card-inner'><div class='card-front'><div class='hero-name'>"  +
		"</div></div><div class='card-back'>" +
		"<h1 id='lights' class='hero-name_back'>" +
		heroName[i] +
		"</h1>" +
		"</div></div></div>";
}

dcCards.insertAdjacentHTML("beforeend", comicCard);
