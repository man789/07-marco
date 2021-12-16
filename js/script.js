// Contact Menu Responsive With Toggle
let navContact = document.querySelector('.navContact');
let cursorContact = document.querySelector('.cursorEnd');
let contact = document.querySelector('.contact');
let contactEnd = document.querySelector('.endContact');

navContact.addEventListener("click", contactWindow);
cursorContact.addEventListener("click", contactWindow);
function contactWindow(){
    contact.classList.toggle('activeContact');
    contactEnd.classList.toggle('endContactActive');
}

contactEnd.addEventListener("click", function(){
    contact.classList.remove('activeContact');
    contactEnd.classList.toggle('endContactActive');
});
// If add Onclick Method on HTML
// function addContact(){
//     contact.classList.toggle('activeContact');
// }
// function removeContact(){
//     contact.classList.toggle('activeContact');
// }
// let bgLoad = document.querySelector('.bg');
// window.onload = function() {
//     bgLoad.className += " loaded";
// }