document.querySelectorAll('.post').forEach(post => {
  const greyHeart = post.querySelector('.grey-heart');
  const redHeart = post.querySelector('.red-heart');

  greyHeart.addEventListener('click', () => {
    redHeart.classList.add('animation');
    redHeart.style.visibility = 'visible';
    setTimeout(() => {
      redHeart.classList.remove('animation');
    }, 900);
  });

  redHeart.addEventListener('click', () => {
    redHeart.classList.remove('animation');
    redHeart.style.visibility = 'hidden';
  });
});


document.getElementById('menu-toggle').addEventListener('click', function () {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('show');
});

document.addEventListener('click', function (e) {
  const menu = document.getElementById('mobile-menu');
  const toggle = document.getElementById('menu-toggle');
  if (!menu.contains(e.target) && !toggle.contains(e.target)) {
    menu.classList.remove('show');
  }
});
