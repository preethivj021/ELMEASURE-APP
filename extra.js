const slider = document.querySelector(".sliderp");
const slides = document.querySelectorAll(".slidep");
const prevArrow = document.getElementById("prev");
const nextArrow = document.getElementById("next");

let index = 0;
const slideCount = slides.length;

// Function to update the slider position
function updateSliderPosition() {
  slider.style.transform = `translateX(-${index * 100}%)`; // Move slides horizontally
}

// Function to move to the next slide
function nextSlide() {
  if (index < slideCount - 1) {
    index++;
  } else {
    index = 0; // Reset to the first slide
  }
  updateSliderPosition();
}

// Function to move to the previous slide
function prevSlide() {
  if (index > 0) {
    index--;
  } else {
    index = slideCount - 1; // Go to the last slide
  }
  updateSliderPosition();
}

// Add event listeners for arrow clicks
nextArrow.addEventListener("click", nextSlide);
prevArrow.addEventListener("click", prevSlide);

// Automatically slide every 5 seconds
setInterval(nextSlide, 5000);