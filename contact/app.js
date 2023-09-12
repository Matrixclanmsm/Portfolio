//Parallax effect

const circle = document.querySelector('.circle');
const ring = document.querySelector('.ring');

document.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 15;

    circle.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
    ring.style.transform = `translate(${-xAxis}px, ${-yAxis}px)`;
});

//On form submit 

(function(){
  emailjs.init("0736_4Z1GZrHvkpcX");
})();


function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
const serviceId = "service_wsbs7ma";
const templateId = "template_8yze83j";

emailjs.send(serviceId, templateId, params)
.then(
  res=>{
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    console.log(res);
  }
)
.catch((err) => console.log(err)); 
}



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
