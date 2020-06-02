particlesJS.load('particles-js', '/scripts/particlesjs.json', function () {
  console.log('callback - particles.js config loaded');
});

particlesJS.load('particles-js2', '/scripts/particlesjs2.json', function () {
  console.log('callback - particles2.js config loaded');
});

const arrow = document.querySelector('.header__arrow');
const technologies = document.querySelector('.technologies');

arrow.addEventListener('click', () => technologies.scrollIntoView({
  behavior: "smooth"
}));