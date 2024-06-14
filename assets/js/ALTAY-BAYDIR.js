const iconArrowRight = document.querySelector('.icon-arrow-right');
const nextTomheat = document.querySelector('.next_tomheat');

iconArrowRight.addEventListener('mouseover', function() {
  nextTomheat.style.display = 'block';
});

iconArrowRight.addEventListener('mouseout', function() {
  nextTomheat.style.display = 'none';
});