// Full email validation 
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

var email = document.getElementById('email-input');
var emailVal = document.getElementById('email-val');
email.addEventListener('blur', emailBlur);
email.addEventListener('focus', emailFocus);
function emailBlur(e) {
    var x = email.value; 
    if( x.indexOf('@') == -1 || x.indexOf('.') == -1) {
        emailVal.style.opacity = '1';
    } 
}
function emailFocus(e) {
    emailVal.style.opacity = '0';
}

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
//you can use Number.isInteger 


// Phone number validation
//NEED TO VALIDATE FOR FLOAT NUMBERS

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
//VALIDATION IS WITH NUMBERS ONLY OR CHARACTERS TOO?

var city = document.getElementById('city-input');
var cityVal = document.getElementById('city-val');
city.addEventListener('blur', cityBlur);
city.addEventListener('focus', cityFocus);
function cityBlur(e) {
    var x = city.value;
    if(x.length < 3) {
        cityVal.style.opacity = '1';
    } 
}
function cityFocus(e) {
    cityVal.style.opacity = '0';
}

// Postal code validation 
//VALIDATION IS WITH NUMBERS ONLY OR CHARACTERS TOO?

var postalCode = document.getElementById('postal-code-input');
var postalCodeVal = document.getElementById('postal-code-val');
postalCode.addEventListener('blur', postalCodeBlur);
postalCode.addEventListener('focus', postalCodeFocus);
function postalCodeBlur(e) {
    var x = postalCode.value;
    if(x.length < 3) {
        postalCodeVal.style.opacity = '1';
    } 
}
function postalCodeFocus(e) {
    postalCodeVal.style.opacity = '0';
}

// ID validation
//NEED TO VALIDATE FOR FLOAT NUMBERS

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

