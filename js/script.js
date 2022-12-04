const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY >0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '25px',
	duration: 2500,
	reset: true
})

sr.reveal('.home-text',{delay:190, origin:'bottom'})

sr.reveal('.about,.services,.portfolio,.contact',{delay:200, origin:'bottom'})

// Create an array of notifications
var notifications = [
	"Welcome to school based Asssement portal.Fell at home",
	"Mary christmas once again from Us",
	"Mr oduor will be greating you in a while..",
	"How are you visitor ? we hope you are fine.Thanks for being here with us",
	"we are happy to have you onboard"
  ];
  
  // Set the time interval for displaying notifications (in milliseconds)
  var timeInterval = 23000;
  
  // Set the interval for displaying notifications
  setInterval(function() {
	// Generate a random number between 0 and the number of notifications
	var randomNumber = Math.floor(Math.random() * notifications.length);
  
	// Display the random notification
	alert(notifications[randomNumber]);
  }, timeInterval);
  