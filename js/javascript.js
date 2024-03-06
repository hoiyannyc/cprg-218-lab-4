//accordions
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');
  const arrow = item.querySelector('.arrow');

  header.addEventListener('click', () => {
    item.classList.toggle('active');
    content.style.maxHeight = item.classList.contains('active') ? content.scrollHeight + 'px' : '0px';
    arrow.classList.toggle('active'); // Toggle 'active' class on the arrow for rotation
  });
});

//footer
const d = new Date();
document.getElementById('date').innerHTML = d.getFullYear();