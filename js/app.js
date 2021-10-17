//----- Global variables -----// 

var registerArray = [];
var errorArray = [];

//----- Functions for validations -----//

// Letter validation

var letters = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var checkForletters = function(string){
 for(i = 0; i < letters.length;i++){
   if(string.indexOf(letters[i]) > -1){
       return true
    }
 }
 return false;
}

// Number validation

var numbers = "0123456789";
var checkForNumbers = function(string){
 for(i = 0; i < numbers.length;i++){
   if(string.indexOf(numbers[i]) > -1){
       return true
    }
 }
 return false;
}

// Special character validation

var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
var checkForSpecialChar = function(string){
 for(i = 0; i < specialChars.length;i++){
   if(string.indexOf(specialChars[i]) > -1){
       return true
    }
 }
 return false;
}

//----- Input validations -----//

// Full name validation 

var fullName = document.getElementById('name-input');
var fullNameVal = document.getElementById('name-val');
fullName.addEventListener('blur', fullNameBlur);
fullName.addEventListener('focus', fullNameFocus);
function fullNameBlur(e) {
    var x = fullName.value; 
    if(x.length < 7 || x.indexOf(' ') <= 0 || x.indexOf(' ') == x.length -1) {
        fullNameVal.style.opacity = '1';
        registerArray[0] = 'error';
        errorArray[0] = 'Error! Please enter a valid full name.' + '\n';
    } else {
        registerArray[0] ='Full name: ' + x + '\n';
        errorArray[0] = null;
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
    if( x.indexOf('@') <= 0 || x.indexOf('.') == -1 || x.includes(' ') || x.indexOf('.') == email.length - 1) {
        emailVal.style.opacity = '1';
        registerArray[1] = 'error';
        errorArray[1] = 'Error! Please enter a valid email.' + '\n';
    } else {
        registerArray[1] ='Email: ' + x + '\n';
        errorArray[1] = null;
    }
}
function emailFocus(e) {
    emailVal.style.opacity = '0';
}

// Password validation

var password = document.getElementById('password-input');
var passwordVal = document.getElementById('password-val');
password.addEventListener('blur', passwordBlur);
password.addEventListener('focus', passwordFocus);
function passwordBlur(e) {
    var x = password.value;
    if(x.length < 8 || !checkForletters(x) || !checkForNumbers(x) || checkForSpecialChar(x)) {
        passwordVal.style.opacity = '1';
        registerArray[2] = 'error';
        errorArray[2] = 'Error! Please enter a valid password.' + '\n';
    } else {
        registerArray[2] ='Password: ' + x + '\n';
        errorArray[2] = null;
    }
}
function passwordFocus(e) {
    passwordVal.style.opacity = '0';
}

// Confirm password validation

var confirmPassword = document.getElementById('confirm-password-input');
var confirmPasswordVal = document.getElementById('confirm-password-val');
confirmPassword.addEventListener('blur', confirmPasswordBlur);
confirmPassword.addEventListener('focus', confirmPasswordFocus);
function confirmPasswordBlur(e) {
    var x = confirmPassword.value;
    if(!(x == password.value)) {
        confirmPasswordVal.style.opacity = '1';
        registerArray[3] = 'error';
        errorArray[3]= 'Error! Please confirm password.' + '\n';
    } else {
        registerArray[3] = 'Confirm password: ' + x + '\n';
        errorArray[3] = null;
    }
}
function confirmPasswordFocus(e) {
    confirmPasswordVal.style.opacity = '0';
}

// Age validation

var age = document.getElementById('age-input');
var ageVal = document.getElementById('age-val');
age.addEventListener('blur', ageBlur);
age.addEventListener('focus', ageFocus);
function ageBlur(e) {
    var x = age.value;
    if(x < 18 || isNaN(x) || x.includes(',') || x.includes('.')) {
        ageVal.style.opacity = '1';
        registerArray[4] = 'error';
        errorArray[4] = 'Error! Please enter a valid age.' + '\n';
    } else {
        registerArray[4] = 'Age: ' + x + '\n';
        errorArray[4] = null;
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
    if(x.length < 7 || isNaN(x) || x.includes(',') || x.includes('.')) {
        phoneNumberVal.style.opacity = '1';
        registerArray[5] = 'error';
        errorArray[5] = 'Error! Please enter a valid phone number.' + '\n';
    } else {
        registerArray[5] = 'Phone number: ' + x + '\n';
        errorArray[5] = null;
    }
}
function phoneNumberFocus(e) {
    phoneNumberVal.style.opacity = '0';
}

// Address validation

var address = document.getElementById('address-input');
var addressVal = document.getElementById('address-val');
address.addEventListener('blur', addressBlur);
address.addEventListener('focus', addressFocus);
function addressBlur(e) {
    var x = address.value;
    if(x.length < 5 || !checkForletters(x) || !checkForNumbers(x) || x.indexOf(' ') == -1) {
        addressVal.style.opacity = '1';
        registerArray[6] = 'error';
        errorArray[6] = 'Error! Please enter a valid address.' + '\n';
    } else {
        registerArray[6] = 'Address: ' + x + '\n';
        errorArray[6] = null;
    }
}
function addressFocus(e) {
    addressVal.style.opacity = '0';
}

// City validation

var city = document.getElementById('city-input');
var cityVal = document.getElementById('city-val');
city.addEventListener('blur', cityBlur);
city.addEventListener('focus', cityFocus);
function cityBlur(e) {
    var x = city.value;
    if(x.length < 3 || checkForSpecialChar(x)) {
        cityVal.style.opacity = '1';
        registerArray[7] = 'error';
        errorArray[7] = 'Error! Please enter a valid city.' + '\n';
    } else {
        registerArray[7] = 'City: ' + x + '\n';
        errorArray[7] = null;
    }
}
function cityFocus(e) {
    cityVal.style.opacity = '0';
}

// Postal code validation 

var postalCode = document.getElementById('postal-code-input');
var postalCodeVal = document.getElementById('postal-code-val');
postalCode.addEventListener('blur', postalCodeBlur);
postalCode.addEventListener('focus', postalCodeFocus);
function postalCodeBlur(e) {
    var x = postalCode.value;
    if(x.length < 3 || checkForSpecialChar(x)) {
        postalCodeVal.style.opacity = '1';
        registerArray[8] = 'error';
        errorArray[8] = 'Wrong postal code format' + '\n';
    } else {
        registerArray[8] = 'Postal code: ' + x + '\n';
        errorArray[8] = null;
    }
}
function postalCodeFocus(e) {
    postalCodeVal.style.opacity = '0';
}

// ID validation

var id = document.getElementById('id-input');
var idVal = document.getElementById('id-val');
id.addEventListener('blur', idBlur);
id.addEventListener('focus', idFocus);
function idBlur(e) {
    var x = id.value;
    if(x.length < 7 || x.length > 8 || isNaN(x) || x.includes('.')) {
        idVal.style.opacity = '1';
        registerArray[9] = 'error';
        errorArray[9] = 'Error! Please enter a valid id number.' + '\n';
    } else {
        registerArray[9] = 'ID: ' + x + '\n';
        errorArray[9] = null;
    }
}
function idFocus(e) {
    idVal.style.opacity = '0';
}

//----- Register button -----//

var button = document.getElementById('button');
button.addEventListener('click',clickEvent);
function clickEvent(e) {
    var text = e.target.value;
    if(registerArray.includes("error")) {
        alert(errorArray.join(' '));
    } else {
        alert(registerArray.join(' '));
    }
}

//----- BONUS: Autocomplete name -----//

var autoCompleteName = document.getElementById('name-input');
autoCompleteName.addEventListener('keydown',autoCompleteEvent);
autoCompleteName.addEventListener('focus',autoCompleteEvent);
function autoCompleteEvent(e) {
    var text = e.target.value;
    console.log(text);
    var titleName = document.getElementById('h3-sub-page');
    titleName.innerHTML = 'Hello ' + text + ' !';
}

