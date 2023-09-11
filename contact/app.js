//Parallax effect

const circle = document.querySelector('.circle');
const ring = document.querySelector('.ring');

document.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 15;

    circle.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
    ring.style.transform = `translate(${-xAxis}px, ${-yAxis}px)`;
});



//Form Submit


// Get the button element and message container
// Get the cookie banner and close button
const cookieBanner = document.getElementById("cookie-banner");
const closeButton = document.getElementById("close-button");
const submit = document.getElementById('submit')

// Show the banner when the button is clicked
submit.addEventListener("click", function (event) {
  event.preventDefault();
  cookieBanner.style.display = "block";
});

// Close the banner when the close button is clicked
closeButton.addEventListener("click", function () {
  cookieBanner.style.display = "none";
});
