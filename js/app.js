var registerArray = [];
var errorArray = [];

// Full name validation 

var fullName = document.getElementById('name-input');
var fullNameVal = document.getElementById('name-val');
fullName.addEventListener('blur', fullNameBlur);
fullName.addEventListener('focus', fullNameFocus);
function fullNameBlur(e) {
    var x = fullName.value; 
    if(x.length < 7 || x.indexOf(' ') <= 0 || x.indexOf(' ') == x.length -1) {
        fullNameVal.style.opacity = '1';
        errorArray[0] = 'Error! Please enter a valid full name.' + '\n';
    } else {
        registerArray[0] ='Full name: ' + x + '\n';
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
    if( x.indexOf('@') == -1 || x.indexOf('.') == -1 || x.includes(' ') == true || x.indexOf('@') == 0 || x.indexOf('.') == email.length - 1) {
        emailVal.style.opacity = '1';
        errorArray[1] = 'Error! Please enter a valid email.' + '\n';
    } else {
        registerArray[1] ='Email: ' + x + '\n';
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
    if(x.length < 8 || x.search(/[a-z]/) < 0 || x.search(/[0-9]/) < 0 || x.search(/\W/) != -1) {
        passwordVal.style.opacity = '1';
        errorArray[2] = 'Error! Please enter a valid password.' + '\n';
    } else {
        registerArray[2] ='Password: ' + x + '\n';
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
        errorArray[3]= 'Error! Please confirm password.' + '\n';
    } else {
        registerArray[3] = 'Confirm password: ' + x + '\n';
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
        errorArray[4] = 'Error! Please enter a valid age.' + '\n';
    } else {
        registerArray[4] = 'Age: ' + x + '\n';
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
        errorArray[5] = 'Error! Please enter a valid phone number. + '\n';
    } else {
        registerArray[5] = 'Phone number: ' + x + '\n';
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
    if(x.length < 5 || x.search(/[a-z]/) < 0 || x.search(/[0-9]/) < 0 || x.indexOf(' ') == -1) {
        addressVal.style.opacity = '1';
        errorArray[6] = 'Error! Please enter a valid address.' + '\n';
    } else {
        registerArray[6] = 'Address: ' + x + '\n';
    }
}
function addressFocus(e) {
    addressVal.style.opacity = '0';
}

//City validation
//Validar caracteres especiales

var city = document.getElementById('city-input');
var cityVal = document.getElementById('city-val');
city.addEventListener('blur', cityBlur);
city.addEventListener('focus', cityFocus);
function cityBlur(e) {
    var x = city.value;
    if(x.length < 3 || x.search(/\W/) != -1) {
        cityVal.style.opacity = '1';
        errorArray[7] = 'Error! Please enter a valid city.' + '\n';
    } else {
        registerArray[7] = 'City: ' + x + '\n';
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
    if(x.length < 3 || x.search(/\W/) != -1) {
        postalCodeVal.style.opacity = '1';
        errorArray[8] = 'Wrong postal code format' + '\n';
    } else {
        registerArray[8] = 'Postal code: ' + x + '\n';
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
        errorArray[9] = 'Error! Please enter a valid id number.' + '\n';
    } else {
        registerArray[9] = 'ID: ' + x + '\n';
    }
}
function idFocus(e) {
    idVal.style.opacity = '0';
}

// Register button  

var button = document.getElementById('button');
button.addEventListener('click',clickEvent);
function clickEvent(e) {
    if(errorArray.length == 0) {
        alert(registerArray.join(' '));
    } else {
        alert(errorArray.join(' '));
    }
}

// Autocomplete Name

var autoCompleteName = document.getElementById('name-input');
autoCompleteName.addEventListener('keypress',autoCompleteEvent);
autoCompleteName.addEventListener('focus',autoCompleteEvent);
function autoCompleteEvent(e) {
    var text = e.target.value;
    console.log(text);
    var titleName = document.getElementById('h3-sub-page');
    titleName.innerHTML = 'Hello ' + text + ' !';
}

