const main = document.querySelector('main');
const nav = document.querySelector('nav');

main.addEventListener('scroll', (e) => {
  console.log(main.scrollTop);
  if (main.scrollTop > 0) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
