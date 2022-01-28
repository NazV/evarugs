const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    loop: true,
    speed: 400,
    spaceBetween: 70,
    centeredSlides: true,
    slideToClickedSlide: true,
    toggle: true,
});

const modalWindow = document.querySelector('.modal');
const buttonModal = document.querySelector('.main-display__button');
const modalButton = document.querySelector('.modal__button')

buttonModal.addEventListener('click', () => {
    modalWindow.classList.add('active');
});

modalWindow.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal__inner');
    if (!isModal) {
        modalWindow.classList.remove('active');
    } 
})

modalButton.addEventListener('click', () => {
    modalWindow.classList.remove('active');
})

