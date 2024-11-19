
const dropBtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dcontent');

dropBtn.addEventListener('click', function() {
    dropdownContent.classList.toggle('show');
});
