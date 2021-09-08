
// Change button's text when changing screen
function searchID(id) {
    return document.getElementById(id)
}


const menu = searchID("mobile-menu")


function showMenu() {
    menu.style.height = '100%';
}


function closeMenu() {
    menu.style.height = '0';
}
  

window.onload = function asd() {
    if (window.screen.width >= 768) {
        const button = searchID("join-btn")
        console.log(button)
        button.innerText = "SEE ALL THE PROGRAM CONTENT HERE"
    }
    
    
    showMenu()
    closeMenu()
}