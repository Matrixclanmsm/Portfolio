//Parallax effect

const circle = document.querySelector('.circle');
const ring = document.querySelector('.ring');

document.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 15;

    circle.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
    ring.style.transform = `translate(${-xAxis}px, ${-yAxis}px)`;
});


  
  // Function to hide the scroll icon on scroll
  $(window).on('scroll', function() {
    $('.scroll-icon').addClass('scroll-icon-hidden');
  });


//Cursor Dot
const cursorDot = document.getElementById("cursor-dot");

document.addEventListener("mousemove", (e) => {
    // Set the dot color to orange
    cursorDot.style.backgroundColor = 'orange';

    // Update the dot's position relative to the document
    cursorDot.style.transform = `translate(${e.clientX + window.scrollX}px, ${e.clientY + window.scrollY}px)`;
});


// Typing Text Animation

const text = document.querySelector(".sec-text");
        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Web Developer";
            }, 0);
            setTimeout(() => {
                text.textContent = "Web Designer";
            }, 4000);
            setTimeout(() => {
                text.textContent = "Content Writer";
            }, 8000); //1s = 1000 milliseconds
            setTimeout(() => {
                text.textContent = "Graphic Designer";
            }, 12000); //1s = 1000 milliseconds
        }
        textLoad();
        setInterval(textLoad, 16000);

