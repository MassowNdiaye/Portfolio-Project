let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("show");  // Hide all slides
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }

  slides[slideIndex - 1].classList.add("show"); // Show active slide
  dots[slideIndex - 1].className += " w3-white"; // Highlight active dot
}

setInterval(() => {
  plusDivs(1);
}, 5000); // Changes slide every 5 seconds
