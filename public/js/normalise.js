// Для плавного скролла по html страницы и перемещения между ссылками. 
// Можно добавить между <script></script> перед закрывающим тегом </body>.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Для добавления плавных эффектов при наведении (hover), активном состоянии (active), фокусе (focus) и нажатии ссылок (click). 
// Код использует классы CSS, например, .smooth-button:
// <button class="smooth-button">Click Me</button>
// <a href="#" class="smooth-link">Link</a>
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.smooth-button');
    const links = document.querySelectorAll('.smooth-link');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function () {
            this.classList.add('hover');
        });
        button.addEventListener('mouseleave', function () {
            this.classList.remove('hover');
        });
        button.addEventListener('mousedown', function () {
            this.classList.add('active');
        });
        button.addEventListener('mouseup', function () {
            this.classList.remove('active');
        });
        button.addEventListener('focus', function () {
            this.classList.add('focus');
        });
        button.addEventListener('blur', function () {
            this.classList.remove('focus');
        });
    });
    links.forEach(link => {
        link.addEventListener('mouseenter', function () {
            this.classList.add('hover');
        });
        link.addEventListener('mouseleave', function () {
            this.classList.remove('hover');
        });
        link.addEventListener('mousedown', function () {
            this.classList.add('active');
        });
        link.addEventListener('mouseup', function () {
            this.classList.remove('active');
        });
        link.addEventListener('focus', function () {
            this.classList.add('focus');
        });
        link.addEventListener('blur', function () {
            this.classList.remove('focus');
        });
    });
});
