const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.navItems')
    burger.addEventListener('click', ()=> {
      nav.classList.toggle('nav-active');
   
    })

  }
  navSlide();


  var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides,5000); 
}


function commentsSlides() {
  var i;
  var slides = document.getElementsByClassName("commentSlide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(commentsSlides,5000); 
}

const arrow = document.getElementsByClassName("arrow")
function arrowCL() {
  console.log("Click")
}

var slideIndexComm = 1;
showSlidesC(slideIndexComm);

// Next/previous controls
function plusSlides(n) {
  showSlidesC(slideIndexComm += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlidesC(slideIndexComm = n);
}

function showSlidesC(n) {
  var i;
  var slides = document.getElementsByClassName("commentSlide");

  if (n > slides.length) {slideIndexComm = 1}
  if (n < 1) {slideIndexComm = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexComm-1].style.display = "block";
} 

