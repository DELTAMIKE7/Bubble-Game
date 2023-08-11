// var timer = +prompt("Enter You timer");
var timer = 0;
var score = 0;
var rnHitValue = 0;
var inputTime = 0;
var bgFlag = 0;
var hitBg = document.querySelector('#hitValue');

function bubbleMaker() {
	var clutter = '';
	for (let i = 0; i <= 179; i++) {
		var num = Math.floor(Math.random() * 10);
		clutter += `<section class="stage">
						<figure class="ball bubble dfac">
                            <h1>${num}</h1>
                        </figure>
					</section>`;
	}
	document.querySelector('.panel-bottom').innerHTML = clutter;
}
function getNewHit() {
	rnHitValue = Math.floor(Math.random() * 10);
	document.querySelector('#hitValue').textContent = rnHitValue;
}
function runTimer() {
	var timerBreak = setInterval(function () {
		if (timer > 0) {
			timer--;
			document.querySelector('#timerValue').textContent = timer;
		} else {
			clearInterval(timerBreak);
			document.querySelector('.panel-bottom').innerHTML = `
                    <div class="gameOverBox">
						<h2>Game Over ⛳️</h2>
						<h2 id="inputTime">Time🕰️-${inputTime} </h2>
						<h1>Your Score :-<span id="totalScore">&nbsp;${score}</span></h1>
						<button onclick="refreshFn()">Start New Game</button>
					</div>`;
			document.querySelector('#hitValue').textContent = 0;
		}
	}, 1000);
}
function increaseScore() {
	score += 10;
	document.querySelector('#scoreValue').textContent = score;
}
function decreaseScore() {
	score -= 10;
	document.querySelector('#scoreValue').textContent = score;
}
document.querySelector('.panel-bottom').addEventListener('click', details => {
	// console.log(Number(details.target.textContent));
	var clickedNum = Number(details.target.textContent);
	if (clickedNum === rnHitValue) {
		increaseScore();
		bubbleMaker();
		getNewHit();
	}
    
	if (bgFlag === 0) {
		hitBg.style.backgroundColor = '#738a8a';
		bgFlag = 1;
	} else {
		hitBg.style.backgroundColor = '#a0c8c8';
		bgFlag = 0;
	}
});
document
	.querySelector('.timer-select-container')
	.addEventListener('click', details => {
		// console.log(Number(details.target.textContent));
		var clickedNum = Number(details.target.textContent);
		timer = clickedNum;
		inputTime = clickedNum;
		document.querySelector('.panel-bottom').innerHTML = ``;
		bubbleMaker();
		runTimer();
		getNewHit();
	});

function refreshFn() {
	location.reload(true);
}
// bubbleMaker();
// getNewHit();
// runTimer();
// console.log(timer)
