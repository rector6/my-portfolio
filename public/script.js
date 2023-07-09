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
// const navLink = document.getElementById('.nav_menu');

// function linkAction() {
//     const navMenu = document.getElementById('nav-menu');
//     // 
//     navMenu.classList.remove('show-menu');
// };
// navLink.forEach(n => n.addEventListener('click', linkAction));




// ======================accordion skill javascript

const skillsContent =  document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills(){
    let itemClass =  this.parentNode.ClassName

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close';
    }
    if(itemClass ==='skills_content skill_close'){
        this.parentNode.className = 'skills_content skills_open'; 
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})
// =================================