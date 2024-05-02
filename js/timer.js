loadEventListeners();

document.addEventListener('DOMContentLoaded', function() {
    var initialDate = '2024-07-02';
    calcTime(initialDate);
});
function loadEventListeners() {
	document.addEventListener('DOMContentLoaded', function() { calcTime(); });
};

var timeTo = document.getElementById('time-to').value,
		date,
		now = new Date(),
		newYear = new Date('7.4.2024').getTime(),
		startTimer = '';

function calcTime(dates) {
	clearInterval(startTimer);

	if(typeof(dates) == 'undefined'){
		date = new Date(newYear).getTime();
	}else {
		date = new Date(dates).getTime();
	}

	function updateTimer(date){

		var now = new Date().getTime();
		var distance = date - now;

		var days = Math.ceil(distance / (1000 * 60 * 60 * 24));
		var hours = Math.ceil((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.ceil((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.ceil((distance % (1000 * 60)) / 1000);

		document.querySelector('.clock-day').innerHTML = days;
		document.querySelector('.clock-hours').innerHTML = hours;
		document.querySelector('.clock-minutes').innerHTML = minutes;
		document.querySelector('.clock-seconds').innerHTML = seconds;

		if(now >= date){
			clearInterval(startTimer);
			document.querySelector('.clock-day').innerHTML = 'D';
			document.querySelector('.clock-hours').innerHTML = 'O';
			document.querySelector('.clock-minutes').innerHTML = 'N';
			document.querySelector('.clock-seconds').innerHTML = 'E';
		}
	}
	startTimer = setInterval(function() { updateTimer(date); }, 1000);
}

