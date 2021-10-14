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

// Email validation



// Password validation



// Confirm password validation



// Age validation



// Phone number validation

var phoneNumber = document.getElementById('phone-number-input');
var phoneNumberVal = document.getElementById('phone-number-val');
phoneNumber.addEventListener('blur', phoneNumberBlur);
phoneNumber.addEventListener('focus', phoneNumberFocus);
function phoneNumberBlur(e) {
    var x = phoneNumber.value;
    if(x.length < 7 || isNaN(x)) {
        phoneNumberVal.style.opacity = '1';
    } 
}
function phoneNumberFocus(e) {
    phoneNumberVal.style.opacity = '0';
}

// Address validation



//City validation



// Postal code validation 



// ID validation


