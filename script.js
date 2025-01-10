// Main Slider Logic
const mainSliderWrapper = document.querySelector(".main-slider-wrapper");
const mainLeftArrow = document.querySelector(".main-arrow.left");
const mainRightArrow = document.querySelector(".main-arrow.right");

let mainIndex = 0;

function updateMainSlider() {
  const mainSlideWidth = document.querySelector(".main-slider-box").clientWidth;
  mainSliderWrapper.style.transform = `translateX(-${
    mainIndex * mainSlideWidth
  }px)`;
}

mainLeftArrow.addEventListener("click", () => {
  mainIndex = mainIndex === 0 ? 4 : mainIndex - 1; // Adjust for 7 boxes
  updateMainSlider();
});

mainRightArrow.addEventListener("click", () => {
  mainIndex = mainIndex === 4 ? 0 : mainIndex + 1; // Adjust for 7 boxes
  updateMainSlider();
});

// Inner Slider Logic
document.querySelectorAll(".inner-slider-container").forEach((container, i) => {
  const innerWrapper = container.querySelector(".inner-slider-wrapper");
  const innerSlides = container.querySelectorAll(".inner-slide");
  const innerDots = container.querySelector(".inner-dots");
  const leftArrow = container.querySelector(".inner-arrow.left");
  const rightArrow = container.querySelector(".inner-arrow.right");
  let innerIndex = 0;

  innerSlides.forEach((_, idx) => {
    const dot = document.createElement("div");
    if (idx === 0) dot.classList.add("active");
    innerDots.appendChild(dot);
    dot.addEventListener("click", () => {
      innerIndex = idx;
      updateInnerSlider();
    });
  });

  function updateInnerSlider() {
    const slideWidth = innerSlides[0].clientWidth;
    innerWrapper.style.transform = `translateX(-${innerIndex * slideWidth}px)`;
    innerDots.querySelectorAll("div").forEach((dot, idx) => {
      dot.classList.toggle("active", idx === innerIndex);
    });
  }

  leftArrow.addEventListener("click", () => {
    innerIndex = innerIndex === 0 ? innerSlides.length - 1 : innerIndex - 1;
    updateInnerSlider();
  });

  rightArrow.addEventListener("click", () => {
    innerIndex = innerIndex === innerSlides.length - 1 ? 0 : innerIndex + 1;
    updateInnerSlider();
  });
});

