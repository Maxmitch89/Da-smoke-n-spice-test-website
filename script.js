const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}

const form = document.getElementById('cateringForm');
const status = document.getElementById('formStatus');

if (form && status) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    status.textContent = 'Thanks! Your inquiry is ready to be connected to the business email/form service.';
  });
}
