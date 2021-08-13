// Sidebar JS
const sidebar_container = document.querySelector('.sidebar-container');
const menu_sidebar_btn = document.querySelector('#menu-sidebar-btn');
const cat_text = document.querySelectorAll('.category');
const side_bar_heading = document.querySelector('.side-bar-heading');

const nav_text = document.querySelectorAll('.nav-text');
const nav_link = document.querySelectorAll('.nav_link');
menu_sidebar_btn.addEventListener('click', () => {

    // if (sidebar_container.classList.contains('open')) {
    sidebar_container.classList.toggle('closed');
    // sidebar_container.classList.toggle('open', 'closed');

    for (let index = 0; index < nav_text.length; index++) {
        nav_text[index].classList.toggle('hide');
    }

    for (let index = 0; index < nav_link.length; index++) {
        nav_link[index].classList.toggle('adjust');
    }


    // side_bar_heading.classList.add('closed');
    // side_bar_heading.classList.remove('open');

    //     cat_text[0].style.display = 'none';
    //     cat_text[1].style.display = 'none';
    // } else {
    //     sidebar_container.classList.add('open');
    //     sidebar_container.classList.remove('closed');

    //     side_bar_heading.classList.add('open');
    //     side_bar_heading.classList.remove('closed');

    //     cat_text[0].style.display = 'block';
    //     cat_text[1].style.display = 'block';


    // }

});
