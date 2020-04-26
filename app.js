var num=[
	{
		no:1,
		color:"rgb(232, 250, 250)",
		noo:31,
		colorr:"rgb(33, 129, 194)"
	},
	{
		no:2,
		color:"rgb(212, 250, 250)",
		noo:35,
		colorr:"rgb(16, 99, 176)"
	},
	{
		no:3,
		color:"rgb(202, 252, 252)",
		noo:38,
		colorr:"rgb(16, 79, 173)"
	},
	{
		no:4,
		color:"rgb(179, 245, 245)",
		noo:37,
		colorr:"rgb(13, 82, 161)"
	},
	{
		no:5,
		color:"rgb(164, 237, 237)",
		noo:23,
		colorr:"rgb(52, 204, 235)"
	},
	{
		no:6,
		color:"rgb(149, 232, 232)",
		noo:34,
		colorr:"rgb(19, 108, 191)"
	},
	{
		no:7,
		color:"rgb(133, 222, 222)",
		noo:32,
		colorr:"rgb(19, 122, 191)"
	},
	{
		no:8,
		color:"rgb(113, 227, 227)",
		noo:36,
		colorr:"rgb(13, 96, 191)"

	},
	{
		no:9,
		color:"rgb(99, 217, 217)",
		noo:30,
		colorr:"rgb(14, 146, 207)"
	},
	{
		no:10,
		color:"rgb(85, 212, 212)",
		noo:27,
		colorr:"rgb(28, 165, 214)"
		
	},
	{
		no:11,
		color:"rgb(72, 212, 212)",
		noo:24,
		colorr:"rgb(38, 187, 224)"
	},
	{
		no:12,
		color:"rgb(44, 217, 217)",
		noo:33,
		colorr:"rgb(19, 114, 191)"
	},
	{
		no:13,
		color:"rgb(47, 218, 224)",
		noo:22,
		colorr:"rgb(64, 208, 237)"
	},
	{
		no:14,
		color:"rgb(30, 220, 227)",
		noo:39,
		colorr:"rgb(13, 67, 148)"
	},
	{
		no:15,
		color:"rgb(24, 213, 219)",
		noo:28,
		colorr:"rgb(19, 157, 207)"
	},
	{
		no:16,
		color:"rgb(54, 220, 235)",
		noo:29,
		colorr:"rgb(8, 146, 196)"
	},
	{
		no:17,
		color:"rgb(33, 204, 219)",
		noo:21,
		colorr:"rgb(38, 199, 224)"
	},
	{
		no:18,
		color:"rgb(21, 199, 214)",
		noo:40,
		colorr:"rgb(9, 53, 117)"
	},
	{
		no:19,
		color:"rgb(64, 207, 230)",
		noo:25,
		colorr:"rgb(22, 180, 219)"
	},
	{
		no:20,
		color:"rgb(53, 206, 230)",
		noo:26,
		colorr:"rgb(35, 178, 222)"
	},
];

const highscore=JSON.parse(localStorage.getItem("highscore")) || [];
const highscoreEasy=JSON.parse(localStorage.getItem("highscoreEasy")) || [];
const maxHighScore=5;
var sqrs=document.querySelectorAll(".squares");
var game=false;
var dec=1;
var correct=document.querySelector("#correct");
var wrong=document.querySelector("#wrong");
var j=0;
var a=[];
var b=[];
var newGame=document.querySelector("#newg");
var score=document.querySelector("#score");
var contain=document.querySelector("#container");
var timeTaken;
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var end=document.querySelector(".end");
var r=true;



function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


shuffle(num);

for(var i=0;i<num.length;i++){
	sqrs[i].style.background=num[i].color;
 	sqrs[i].textContent=num[i].no;
 	a[i]=num[i].noo;
 	b[i]=num[i].colorr;

 	sqrs[i].addEventListener("click",function(){
 		var clickednum=this.textContent;
 		var correctnum=value();
 		if(clickednum==correctnum){
 			correct.play();
 			game=true;
 			if(r){
		 		if(correctnum<=20){
		 			this.style.backgroundColor=b[j];
		 			this.textContent=a[j++];
		 		}
		 		else{
		 			this.style.backgroundColor="#232323";
		 			this.textContent="";
		 		}
		 		if(correctnum==40){
	 			aTimer.stop();
	 			contain.classList.add("dark");
				highscore.push(timeTaken);
				highscore.sort((a,b)=> a-b);
				highscore.splice(5);
				localStorage.setItem("highscore",JSON.stringify(highscore));
				score.textContent="";
				for(var i=0;i<highscore.length;i++){
				score.textContent+=(i+ 1 + ")" +highscore[i] + "  ");
				}
				end.style.display="block";
				end.innerHTML="<h1>GAME OVER</h1><br><h4>SCORE:"+timeTaken+"<h4>"
	 			}
	 		}
	 		else{
	 			this.style.backgroundColor="#232323";
	 			this.textContent="";

	 			if(correctnum==20){
		 			aTimer.stop();
		 			contain.classList.add("dark");
					highscoreEasy.push(timeTaken);
					highscoreEasy.sort((a,b)=> a-b);
					highscoreEasy.splice(5);
					localStorage.setItem("highscoreEasy",JSON.stringify(highscoreEasy));
					score.textContent="";
					for(var i=0;i<highscoreEasy.length;i++){
					score.textContent+=(i+ 1 + ")" +highscoreEasy[i] + "  ");
					}
					end.style.display="block";
					end.innerHTML="<h1>GAME OVER</h1><br><h4>SCORE:"+timeTaken+"<h4>"
	 			}
	 		}
 		}
 		else{
 			wrong.play();
 			console.log("wrong!");
 			game=false;
 		}
 	})
}


easy.addEventListener("click", function(){
	hard.classList.add("notSelected");
	easy.classList.remove("notSelected");
	aTimer.stop();
	contain.classList.add("dark");
	end.style.display="none";
	aTimer.reset();
	r=false;
	j=0;
	dec=1;
	game=false;
	shuffle(num);
	for(var i=0;i<num.length;i++){
	sqrs[i].style.background=num[i].color;
 	sqrs[i].textContent=num[i].no;
 	a[i]=num[i].noo;
 	b[i]=num[i].colorr; 	
	}
	score.textContent="";
	for(var i=0;i<highscoreEasy.length;i++){
		score.textContent+=(i+ 1 + ")" +highscoreEasy[i] + "  ");
		}
});

hard.addEventListener("click", function(){
	easy.classList.add("notSelected");
	hard.classList.remove("notSelected");
	aTimer.stop();
	contain.classList.add("dark");
	aTimer.reset();
	r=true;
	j=0;
	dec=1;
	game=false;
	shuffle(num);
	for(var i=0;i<num.length;i++){
	sqrs[i].style.background=num[i].color;
 	sqrs[i].textContent=num[i].no;
 	a[i]=num[i].noo;
 	b[i]=num[i].colorr; 	
	}
	score.textContent="";
	for(var i=0;i<highscore.length;i++){
		score.textContent+=(i+ 1 + ")" +highscore[i] + "  ");
		}
});

newGame.addEventListener("click",function(){
	aTimer.stop();
	contain.classList.add("dark");
	aTimer.reset();
	j=0;
	dec=1;
	game=false;
	shuffle(num);
	for(var i=0;i<num.length;i++){
	sqrs[i].style.background=num[i].color;
 	sqrs[i].textContent=num[i].no;
 	a[i]=num[i].noo;
 	b[i]=num[i].colorr; 	
	}
	end.style.display="none";
});

function value(){
	if(game){
			if(dec<41)
				dec++;
		}
	return dec;
};


var Stopwatch = function(elem, options) {
  
  var timer       = createTimer(),
      startButton = createButton("start", start),
      offset,
      clock,
      interval;

  options = options || {};
  options.delay = options.delay || 1;
     
  elem.appendChild(timer);
  elem.appendChild(startButton);

  reset();
  
  // private functions
  function createTimer() {
    return document.createElement("span");
  }
  
  function createButton(action, handler) {
    var a = document.createElement("button");
    a.href = "#" + action;
    a.innerHTML = action;
    a.addEventListener("click", function(event) {
      handler();
      event.preventDefault();
    });
    return a;
  }
  
  function start() {
  	contain.classList.remove("dark");
    if (!interval) {
      offset   = Date.now();
      interval = setInterval(update, options.delay);
    }
  }
  
  function stop() {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
    timeTaken=timer.textContent;
  }
  
  function reset() {
    clock = 0;
    render(0);
  }
  
  function update() {
    clock += delta();
    render();
  }
  
  function render() {
    timer.textContent = clock/1000; 
  }
  
  function delta() {
    var now = Date.now(),
        d   = now - offset;
    
    offset = now;
    return d;
  }
  
  this.start  = start;
  this.stop   = stop;
  this.reset  = reset;
};


var m = document.getElementById("a-timer");
aTimer = new Stopwatch(m,{delay: 100});

for(var i=0;i<highscore.length;i++){
score.textContent+=(i+ 1 + ")" +highscore[i] + "  ");
}