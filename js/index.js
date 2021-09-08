
// Change button's text when changing screen



window.onload = function asd() {
    if (window.screen.width >= 768) {
        const button = document.getElementById("join-btn")
        console.log(button)
        button.innerText = "SEE ALL THE PROGRAM CONTENT HERE"
    }    
}