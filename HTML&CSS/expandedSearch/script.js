const sBar = document.querySelector('.sBar');

sBar.addEventListener('mouseenter', function () {
    this.focus();
});

sBar.addEventListener('mouseleave', function () {
    this.blur();
});