document.getElementById('openMenu').addEventListener('click', function() {
    document.querySelector('.menuMobile').classList.add('active');
  });
  
  document.getElementById('closeMenu').addEventListener('click', function() {
    document.querySelector('.menuMobile').classList.remove('active');
  });
  