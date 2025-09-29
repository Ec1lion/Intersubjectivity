let slides = document.querySelectorAll('.slide');
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
let dotsContainer = document.querySelector('.dots');
let currentIndex = 0;
let slideInterval;

// Create dots dynamically
slides.forEach((_, i) => {
  let dot = document.createElement('span');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

let dots = document.querySelectorAll('.dots span');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
  });
  slides[index].classList.add('active');
  dots[index].classList.add('active');
  currentIndex = index;
}

function nextSlide() {
  let newIndex = (currentIndex + 1) % slides.length;
  showSlide(newIndex);
}

function prevSlide() {
  let newIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(newIndex);
}

function goToSlide(index) {
  showSlide(index);
  resetInterval();
}

function startInterval() {
  slideInterval = setInterval(nextSlide, 4000);
}

function resetInterval() {
  clearInterval(slideInterval);
  startInterval();
}

// Event listeners
nextBtn.addEventListener('click', () => {
  nextSlide();
  resetInterval();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetInterval();
});

// Initialize
showSlide(currentIndex);
startInterval();
