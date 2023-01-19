
const body = document.querySelector('body');

document.getElementById('menu-burger').onclick = function () {
    document.getElementById('menu-ul').classList.add('menu__open');
    body.style.overflow = 'hidden';
}

document.querySelectorAll('#menu-ul *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu-ul').classList.remove('menu__open');
        body.style.overflow = 'auto';
    }
})