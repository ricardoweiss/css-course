const backdrop = document.querySelector('.backdrop');
const selectPlanButtons = document.querySelectorAll('.plan button');

const modal = document.querySelector('.modal');
const modalNoButton = document.querySelector('.modal__action--negative');

const mobileNavBar = document.querySelector('.mobile-nav');
const mobileNavButton = document.querySelector('.toggle-button');

for (button of selectPlanButtons) {
    button.addEventListener('click', () => {
        /*backdrop.style.display = 'block';
        modal.style.display = 'block';*/
        backdrop.classList.add('open');
        modal.classList.add('open');
    })
}


const closeModal = () => {
    /*backdrop.style.display = 'none';
    modal.style.display = 'none';*/
    backdrop.classList.remove('open');
    modal.classList.remove('open');
};


const openMobileNav = () => {
    /*mobileNavBar.style.display = 'block';
    backdrop.style.display = 'block';*/
    mobileNavBar.classList.add('open');
    backdrop.classList.add('open');
};


const closeMobileNav = () => {
    /*backdrop.style.display = 'none';
    mobileNavBar.style.display = 'none';*/
    backdrop.classList.remove('open');
    mobileNavBar.classList.remove('open');
};


mobileNavButton.addEventListener('click', openMobileNav);
backdrop.addEventListener('click', closeMobileNav);


if (modal) {
    backdrop.addEventListener('click', closeModal);
    modalNoButton.addEventListener('click', closeModal);
}
