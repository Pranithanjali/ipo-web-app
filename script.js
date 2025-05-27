const pageNumbers = document.querySelectorAll('.page-number');

pageNumbers.forEach(page => {
  page.addEventListener('click', function() {
    pageNumbers.forEach(p => p.classList.remove('active'));
    this.classList.add('active');
  });
});
