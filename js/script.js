const menuHeight = document.querySelector(".header-top").clientHeight;

document.querySelectorAll(".menu-element__link").forEach(element => {
    element.addEventListener("click", function (e) {
        e.preventDefault();

        if (hasClass(this, 'active')) {
            return;
        }

        const linkHref = this.getAttribute("href");
        const hrefElement = document.getElementById(linkHref.replace("#", ""));

        const paddingTop = parseInt(getComputedStyle(document.querySelector('#work')).paddingTop);

        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: hrefElement.offsetTop - paddingTop - menuHeight
        });

        changeActiveMenuElement(this);
    });
});


const options = {
    threshold: 0.3
}
const callback = function(entries) {
    entries.forEach(entry => {
        const sectionMenuLink = document.querySelector(`.menu-element__link[href='#${entry.target.id}']`);
        if (entry.isIntersecting && !hasClass(sectionMenuLink, 'active')) {
            changeActiveMenuElement(sectionMenuLink);
        }
    });
};
const observer = new IntersectionObserver(callback, options);
document.querySelectorAll(".observer-section").forEach(element => {
    observer.observe(element);
});

// Общие функции
/** 
 * Меняет активный элемент в пунктах меню
 * @param element Ссылка в меню
* */
function changeActiveMenuElement(element) {
    document.querySelector(".menu-element__link.active").classList.remove('active');
    element.classList.add('active');
}

/** 
 * Проверяет наличие класса у элемента
 *@param element
 * @param className
 */
function hasClass(element, className) {
    return element.classList.contains(className);
}

// Анимация элементов секции преймущества при скролле
const workElements = document.querySelectorAll('.work-element__animation');
const workOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const workCallback = function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
};

const workObserver = new IntersectionObserver(workCallback, workOptions);

workElements.forEach(element => {
    workObserver.observe(element);
});

// обратная связь
 const form = document.querySelector(".contact-me__form");
        const result = document.querySelector(".form-result");

        form.addEventListener("submit", function (e) {
            e.preventDefault(); 
            form.reset();

            // Показать сообщение об успешной отправке
            result.style.display = "block";

            // Автоматически скрыть сообщение через, например, 5 секунд
            setTimeout(() => {
                result.style.display = "none";
            }, 5000);
        });

        
    // Закрытие меню после выбора пункта
document.querySelectorAll(".menu-element__link").forEach(element => {
    element.addEventListener("click", function() {
        // Снимаем флажок с чекбокса
        document.getElementById("hamburger").checked = false;
        
        // Возвращаем анимацию линий гамбургера в исходное состояние
        const lines = document.querySelectorAll('.menu-hamburger .line');
        lines[0].style.transform = '';
        lines[1].style.opacity = '';
        lines[2].style.transform = '';
    });
});