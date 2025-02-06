const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 2;

function updateCarousel() {

  const itemWidth = items[0].offsetWidth + 0.04*window.innerWidth;
  const containerWidth = track.parentElement.offsetWidth;
  const offset = (containerWidth / 2) - (itemWidth / 2) - (currentIndex * itemWidth);
  
  track.style.transform = `translateX(${offset}px)`;
  

  items.forEach(item => item.classList.remove('active'));
  items[currentIndex].classList.add('active');
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < items.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});


updateCarousel();

window.addEventListener('resize', updateCarousel);