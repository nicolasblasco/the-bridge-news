// Full name validation 

var fullName = document.getElementById('name-input');
var fullNameVal = document.getElementById('name-val');
fullName.addEventListener('blur', fullNameBlur);
fullName.addEventListener('focus', fullNameFocus);
function fullNameBlur(e) {
    var x = fullName.value;
    if(x.length < 6 || x.indexOf(' ') == -1) {
        fullNameVal.style.opacity = '1';
    } 
}
function fullNameFocus(e) {
    fullNameVal.style.opacity = '0';
}