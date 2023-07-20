const wrapper = document.querySelector(".wrapper");
const Loginlink = document.querySelector(".Login-link");
const Registerlink = document.querySelector(".Register-link");
const btnPopup = document.querySelector(".btnlogin-popup");
const iconclose = document.querySelector(".icon-close");




Registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

Loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconclose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});