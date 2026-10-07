const btn = document.querySelector('.toggle-btn');
const bio = document.querySelector('.bio');

btn.addEventListener('click', () => {
  if (bio.style.display === 'none') {
    bio.style.display = 'block';
    btn.textContent = 'Hide Bio';
  } else {
    bio.style.display = 'none';
    btn.textContent = 'Show Bio';
  }
});
