document.addEventListener("DOMContentLoaded", function() {
  const popupBtns = document.querySelectorAll('.open-popup');
  const container = document.querySelector('.popup-container');

  popupBtns.forEach((btn) => {
    btn.addEventListener('click', function() {
      container.style.display = 'flex';
    });
  });

  container.addEventListener('click', function(event){
    if(event.target == container) {
      container.style.display = 'none';
    }
  });

});