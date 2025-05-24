document.querySelectorAll('.like-btn').forEach(button => {
  button.addEventListener('click', () => {
    button.textContent = button.textContent === '❤️ Like' ? '💔 Unlike' : '❤️ Like';
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
