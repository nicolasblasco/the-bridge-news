// Full name validation 
//FIX: at least 6 letters without counting blank spaces

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
//FIX: VALIDATION DOESNT WORK WHEN A NUMBER IS 15.5 BUT DOES WHEN IT'S 15,5

var age = document.getElementById('age-input');
var ageVal = document.getElementById('age-val');
age.addEventListener('blur', ageBlur);
age.addEventListener('focus', ageFocus);
function ageBlur(e) {
    var x = age.value;
    if(x < 18 || isNaN(x) || isInt(x) == 'false') {
        ageVal.style.opacity = '1';
    } 
}
function ageFocus(e) {
    ageVal.style.opacity = '0';
}


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

var id = document.getElementById('id-input');
var idVal = document.getElementById('id-val');
id.addEventListener('blur', idBlur);
id.addEventListener('focus', idFocus);
function idBlur(e) {
    var x = id.value;
    if(x.length < 7 || x.length > 8 || isNaN(x)) {
        idVal.style.opacity = '1';
    } 
}
function idFocus(e) {
    idVal.style.opacity = '0';
}

