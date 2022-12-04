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

////////////////////////////////////////////////////////////////////////////////////

// JavaScript code for generating random notifications
function generateRandomNotification() {
	// Create an array of possible notifications
	var notifications = [
	  "Welcome to Academic department website!",
	  "Thanks for visiting our site.",
	  "Mary christmass.",
	  "Check out our latest blog post.",
	  "Follow us on social media for updates.",
	];
  
	// Generate a random number between 0 and the length of the array
	var randomIndex = Math.floor(Math.random() * notifications.length);
  
	// Use the random number to select a notification from the array
	var notification = notifications[randomIndex];
  
	// Display the notification using a "toast" style notification
	var notificationElement = document.createElement("div");
	notificationElement.classList.add("toast");
	notificationElement.innerText = notification;
	document.body.appendChild(notificationElement);
  
	// Use a CSS transition to fade the notification in and out
	notificationElement.classList.add("toast-enter");
	setTimeout(function() {
	  notificationElement.classList.remove("toast-enter");
	  notificationElement.classList.add("toast-exit");
	  setTimeout(function() {
		notificationElement.remove();
	  }, 2000);
	}, 5000);
  }
  
  // Generate a random notification every 5 seconds
  setInterval(generateRandomNotification, 13000);

//////////////////////////////////////////////////////////////////////////


  // Set the timeout duration (in seconds)
  var timeoutDuration = 10;

  // Set a timer to log out the user after the timeout duration
  setTimeout(function() {
    // Redirect the user to the logout page
    window.location.href = "https://jamilo-school.github.io/log-in/";
  }, timeoutDuration * 1000);

  /////////////////////////////////////////////////////////////////////////////

   // Notification message creted by javascript amd cs;javascript code  starts here//

        // Create the pop up notification
var popup = document.createElement("div");
popup.classList.add("popup");

// Add the notification message to the pop up
var message = document.createTextNode("We will log you out in 30sec💫..To check on your browser.");
popup.appendChild(message);

// Add the pop up to the page
document.body.appendChild(popup);

// Use CSS transitions to create a smooth fade in effect
popup.style.transition = "opacity 0.5s ease-in-out";
popup.style.opacity = 0;


// Show the pop up after a short delay
setTimeout(function() {
  popup.style.opacity = 1;
}, 500);

// Hide the pop up after a few seconds
setTimeout(function() {
  popup.style.opacity = 0;
}, 5000);
// Notification message creted by javascript amd cs;javascript code  ends here//

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      


