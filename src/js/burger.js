document.addEventListener('DOMContentLoaded', () => {
  const burgerButton = document.querySelector('.burger');
  const closeButton = document.querySelector('.menu-close');
  const mobileNav = document.querySelector('.menu-mobile');

  // Відкрити меню при натисканні на бургер-кнопку
  burgerButton.addEventListener('click', () => {
    mobileNav.classList.add('menu-open');
    burgerButton.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // Забороняємо прокрутку
  });

  // Закрити меню при натисканні на кнопку закриття
  closeButton.addEventListener('click', () => {
    mobileNav.classList.remove('menu-open');
    burgerButton.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = ''; // Відновлюємо прокрутку
  });
});
