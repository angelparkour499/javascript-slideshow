var slides = document.getElementsByClassName("slide");

var i;

var slideIndex = 1;

slider(slideIndex);

function addSlide(index) {
  slider(slideIndex += index)
}

function slider(index) {
  
  if (index > slides.length) {slideIndex = 1}
 if (index < 1) {slideIndex = slides.length}
  for (i = 0; i <slides.length; i++) {
    slides[i].style.display = 'none'
  }
  slides[slideIndex-1].style.display = 'block'
}