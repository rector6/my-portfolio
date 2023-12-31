const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')


//  to open bottom nav
if(navToggle) {
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}


// To close bottom nav

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

// ===========================
const navLink = document.getElementById('.nav_menu');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // 
    navMenu.classList.remove('show-menu');
}
// navLink.forEach(n=>n.addEventListener('click', linkAction));




// ======================accordion skill javascript

const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills(){
    let itemClass =  this.parentNode.ClassName

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close';
    }
    if(itemClass === 'skills_content skill_close'){
        this.parentNode.className = 'skills_content skills_open'; 
    }
}
skillsHeader.forEach(n => n.addEventListener('click', toggleSkills));

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
});
// =================================

// ==============QUALIFICATION TAGS========

const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

    tabs.forEach(tab =>{
        tab.addEventListener('click', () =>{
            const target = document.querySelector(tab.dataset.target)

            tabContents.forEach(tabContent =>{
                tabContent.classList.remove('qualification_active')
            })
            target.classList.add('qualification_active')

            tabs.forEach(tab =>{
                tab.classList.remove('qualification_active')
            })
            tab.classList.add('qualification_active')
        })
    })


    // ============social modal

    const modalViews = document.querySelectorAll('.services_modal'),
          modalBtns = document.querySelectorAll('.services_button'),
          modalCloses = document.querySelectorAll('.services_modal-close')


    let modal = function(modalClick) {
        modalViews[modalClick].classList.add('active-modal')
    }

    modalBtns.forEach((modalBtn, i) =>{
        modalBtn.addEventListener('click', () =>{
            modal(i)
        })
    })

    modalCloses.forEach((modalClose) =>{
        modalClose.addEventListener('click', () => {
            modalViews.forEach((modalView) =>{
                modalView.classList.remove('active-modal')
            })
        })
    })

    // =======portfolio swiper

let swiper = new Swiper('.portfolio_container', {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});