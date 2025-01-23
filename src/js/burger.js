document.addEventListener('DOMContentLoaded', () => {
  const logoLink = document.querySelector('.logo-link');
  const burgerButton = document.querySelector('.burger');
  const closeButton = document.querySelector('.menu-close');
  const mobileNav = document.querySelector('.menu-mobile');
  const menuLinks = document.querySelectorAll('.menu-link');

  // Логотип в хедері
  logoLink.addEventListener('click', event => {
    event.preventDefault(); // Запобігаємо стандартному переходу за посиланням

    // Плавна прокрутка до верхньої частини сторінки
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  // Відкрити меню
  burgerButton.addEventListener('click', () => {
    mobileNav.classList.add('menu-open');
    document.body.style.overflow = 'hidden'; // Блокування прокрутки сторінки
    burgerButton.setAttribute('aria-expanded', 'true');
  });

  // Закрити меню при натисканні кнопки закриття
  closeButton.addEventListener('click', () => {
    closeMenu();
  });

  // Закрити меню при натисканні на посилання
  menuLinks.forEach(link => {
    link.addEventListener('click', event => {
      console.log('Посилання натиснуто:', link.textContent); // Діагностика
      event.preventDefault(); // Запобігаємо стандартній поведінці
      closeMenu(); // Закрити меню
      const targetId = link.getAttribute('href'); // Отримуємо цільовий елемент
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' }); // Плавна прокрутка
      }
    });
  });

  // Функція для закриття меню
  function closeMenu() {
    console.log('Меню закрито'); // Діагностика
    mobileNav.classList.remove('menu-open');
    document.body.style.overflow = ''; // Відновлення прокрутки
    burgerButton.setAttribute('aria-expanded', 'false');
  }
});
