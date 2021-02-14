/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navsections = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
////just trying 
function pageCreateNavbar()
{
    for (let item of sections) {
    let creatnewelement='';
    creatnewelement += `<li class='nav-item ${item.className}' data-link=${item.id}><a href="${item.id}">${item.dataset.nav}</li>`;
    creatnewelement += '\xa0\xa0\xa0\xa0\xa0\xa0\xa0';
    navsections.insertAdjacentHTML('beforeend', creatnewelement);

}
} 
pageCreateNavbar();


  
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active