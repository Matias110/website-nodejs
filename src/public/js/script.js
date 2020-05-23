const open = document.getElementById('open');
let menu = document.querySelector('.menu');
open.addEventListener('click', () => {
    if (open.getAttribute('class') == 'fas fa-bars') {
        open.classList.remove('fas', 'fa-bars');
        open.classList.add('fas', 'fa-times');
        menu.style.left = '0';
        menu.style.transition = 'all .4s ease';
    } else {
        open.classList.remove('fas', 'fa-times');
        open.classList.add('fas', 'fa-bars');
        menu.style.left = '-100%';
    }
});

