//----- Inputs ------//

var fullName = document.getElementById('name-input');
var email = document.getElementById('email-input');
var password = document.getElementById('password-input');
var confirmPassword = document.getElementById('confirm-password-input');
var age = document.getElementById('age-input');
var ageVal = document.getElementById('age-val');
var phoneNumber = document.getElementById('phone-number-input');
var address = document.getElementById('address-input');
var city = document.getElementById('city-input');
var postalCode = document.getElementById('postal-code-input');
var id = document.getElementById('id-input');

var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

//----- Error messages -----//

var fullNameVal = document.getElementById('name-val');
var emailVal = document.getElementById('email-val');
var passwordVal = document.getElementById('password-val');
var confirmPasswordVal = document.getElementById('confirm-password-val');
var phoneNumberVal = document.getElementById('phone-number-val');
var addressVal = document.getElementById('address-val');
var cityVal = document.getElementById('city-val');
var postalCodeVal = document.getElementById('postal-code-val');
var idVal = document.getElementById('id-val');

//----- Arrays for register button -----// 

var registerArray = [];
var errorArray = [];

//----- Functions for validations -----//

// Letter validation

var letters = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var checkForletters = function(string) {
 for(i = 0; i < letters.length;i++){
   if(string.indexOf(letters[i]) > -1){
       return true
    }
 }
 return false;
}

// Number validation

var numbers = "0123456789";
var checkForNumbers = function(string) {
 for(i = 0; i < numbers.length;i++){
   if(string.indexOf(numbers[i]) > -1){
       return true
    }
 }
 return false;
}

// Special character validation

var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
var checkForSpecialChar = function(string) {
 for(i = 0; i < specialChars.length;i++){
   if(string.indexOf(specialChars[i]) > -1){
       return true
    }
 }
 return false;
}

//----- Functions for input validations -----//

// Full name validation 

fullName.addEventListener('blur', fullNameBlur);
fullName.addEventListener('focus', fullNameFocus);
function fullNameFocus(e) {
    fullNameVal.style.opacity = '0';
}
function fullNameBlur(e) {
    var x = fullName.value; 
    if(x.length < 7 || x.indexOf(' ') <= 0 || x.indexOf(' ') == x.length -1) {
        fullNameVal.style.opacity = '1';
        registerArray[0] = 'error';
        errorArray[0] = 'Error! Please enter a valid full name.' + '\n';
    } else {
        registerArray[0] ='Full Name: ' + x + '\n';
        errorArray[0] = null;
    }
}

// Email validation

email.addEventListener('blur', emailBlur);
email.addEventListener('focus', emailFocus);
function emailFocus(e) {
    emailVal.style.opacity = '0';
}
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

// Password validation

password.addEventListener('blur', passwordBlur);
password.addEventListener('focus', passwordFocus);
function passwordFocus(e) {
    passwordVal.style.opacity = '0';
}
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

// Confirm password validation

confirmPassword.addEventListener('blur', confirmPasswordBlur);
confirmPassword.addEventListener('focus', confirmPasswordFocus);
function confirmPasswordFocus(e) {
    confirmPasswordVal.style.opacity = '0';
}
function confirmPasswordBlur(e) {
    var x = confirmPassword.value;
    if(!(x == password.value)) {
        confirmPasswordVal.style.opacity = '1';
        registerArray[3] = 'error';
        errorArray[3]= 'Error! Please confirm password.' + '\n';
    } else {
        registerArray[3] = 'Confirm Password: ' + x + '\n';
        errorArray[3] = null;
    }
}


// Age validation

age.addEventListener('blur', ageBlur);
age.addEventListener('focus', ageFocus);
function ageFocus(e) {
    ageVal.style.opacity = '0';
}
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


// Phone number validation

phoneNumber.addEventListener('blur', phoneNumberBlur);
phoneNumber.addEventListener('focus', phoneNumberFocus);
function phoneNumberFocus(e) {
    phoneNumberVal.style.opacity = '0';
}
function phoneNumberBlur(e) {
    var x = phoneNumber.value;
    if(x.length < 7 || isNaN(x) || x.includes(',') || x.includes('.')) {
        phoneNumberVal.style.opacity = '1';
        registerArray[5] = 'error';
        errorArray[5] = 'Error! Please enter a valid phone number.' + '\n';
    } else {
        registerArray[5] = 'Phone Number: ' + x + '\n';
        errorArray[5] = null;
    }
}


// Address validation

address.addEventListener('blur', addressBlur);
address.addEventListener('focus', addressFocus);
function addressFocus(e) {
    addressVal.style.opacity = '0';
}
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

// City validation

city.addEventListener('blur', cityBlur);
city.addEventListener('focus', cityFocus);
function cityFocus(e) {
    cityVal.style.opacity = '0';
}
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

// Postal code validation 

postalCode.addEventListener('blur', postalCodeBlur);
postalCode.addEventListener('focus', postalCodeFocus);
function postalCodeFocus(e) {
    postalCodeVal.style.opacity = '0';
}
function postalCodeBlur(e) {
    var x = postalCode.value;
    if(x.length < 3 || checkForSpecialChar(x)) {
        postalCodeVal.style.opacity = '1';
        registerArray[8] = 'error';
        errorArray[8] = 'Error! Please enter a valid postal code' + '\n';
    } else {
        registerArray[8] = 'Postal Code: ' + x + '\n';
        errorArray[8] = null;
    }
}

// ID validation

id.addEventListener('blur', idBlur);
id.addEventListener('focus', idFocus);
function idFocus(e) {
    idVal.style.opacity = '0';
}
function idBlur(e) {
    var x = id.value;
    if(x.length < 7 || x.length > 8 || isNaN(x) || x.includes('.')) {
        idVal.style.opacity = '1';
        registerArray[9] = 'error';
        errorArray[9] = 'Error! Please enter a valid id number.' + '\n';
    } else {
        registerArray[9] = 'ID Number: ' + x + '\n';
        errorArray[9] = null;
    }
}

//----- Register button -----//
var button = document.getElementById('button');
var url = 'https://curso-dev-2021.herokuapp.com/newsletter?name='+fullName.value+'&email='+email.value+'&password='+password.value+'&confirmPassword='+confirmPassword.value+'&age='+age.value+'&phoneNumber='+phoneNumber.value+'&address='+address.value+'&city='+city.value+'&postalCode='+postalCode.value+'&id='+id.value;
button.addEventListener('click',clickEvent);
function clickEvent(e) {
    var message = document.getElementById('message');
    if(registerArray.length == 0) {
        modal.style.display = "block";
        message.innerHTML = 'Please complete the form!';
    } else if(registerArray.includes("error")) {
        modal.style.display = "block";
        message.innerHTML = errorArray.join('<br>');
    } else {
        modal.style.display = "block";
        message.innerHTML = registerArray.join('<br>');
    }
    
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
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

