window.onload = function() {

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
    var idNumber = document.getElementById('id-input');

    //----- Error messages -----//

    var fullNameVal = document.getElementById('name-val');
    var emailVal = document.getElementById('email-val');
    var passwordVal = document.getElementById('password-val');
    var confirmPasswordVal = document.getElementById('confirm-password-val');
    var phoneNumberVal = document.getElementById('phone-number-val');
    var addressVal = document.getElementById('address-val');
    var cityVal = document.getElementById('city-val');
    var postalCodeVal = document.getElementById('postal-code-val');
    var idNumberVal = document.getElementById('id-val');

    //----- Arrays for register button -----// 

    var registerArray = [];
    var errorArray = [];

    //----- Functions for specific validations -----//

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

    fullName.addEventListener('blur', validateFullName);
    fullName.addEventListener('focus', clearFullNameError);
    function clearFullNameError(e) {
        fullNameVal.style.opacity = '0';
    }
    function validateFullName(e) {
        var x = fullName.value; 
        if(x.length < 7 || x.indexOf(' ') <= 0 || x.indexOf(' ') == x.length -1) {
            fullNameVal.style.opacity = '1';
            registerArray[0] = 'error';
            errorArray[0] = 'Error! Please enter a valid full name.';
        } else {
            registerArray[0] ='Full Name: ' + x;
            errorArray[0] = null;
        }
    }

    // Email validation

    email.addEventListener('blur', validateEmail);
    email.addEventListener('focus', clearEmailError);
    function clearEmailError(e) {
        emailVal.style.opacity = '0';
    }
    function validateEmail(e) {
        var x = email.value; 
        if( x.indexOf('@') <= 0 || x.indexOf('.') == -1 || x.includes(' ') || x.indexOf('.') == email.length - 1) {
            emailVal.style.opacity = '1';
            registerArray[1] = 'error';
            errorArray[1] = 'Error! Please enter a valid email.';
        } else {
            registerArray[1] ='Email: ' + x;
            errorArray[1] = null;
        }
    }

    // Password validation

    password.addEventListener('blur', validatePassword);
    password.addEventListener('focus', clearPasswordError);
    function clearPasswordError(e) {
        passwordVal.style.opacity = '0';
    }
    function validatePassword(e) {
        var x = password.value;
        if(x.length < 8 || !checkForletters(x) || !checkForNumbers(x) || checkForSpecialChar(x)) {
            passwordVal.style.opacity = '1';
            registerArray[2] = 'error';
            errorArray[2] = 'Error! Please enter a valid password.';
        } else {
            registerArray[2] ='Password: ' + x;
            errorArray[2] = null;
        }
    }

    // Confirm password validation

    confirmPassword.addEventListener('blur', validateConfirmPassword);
    confirmPassword.addEventListener('focus', clearConfirmPasswordError);
    function clearConfirmPasswordError(e) {
        confirmPasswordVal.style.opacity = '0';
    }
    function validateConfirmPassword(e) {
        var x = confirmPassword.value;
        if(!(x == password.value)) {
            confirmPasswordVal.style.opacity = '1';
            registerArray[3] = 'error';
            errorArray[3]= 'Error! Please confirm password.';
        } else {
            registerArray[3] = 'Confirm Password: ' + x;
            errorArray[3] = null;
        }
    }


    // Age validation

    age.addEventListener('blur', validateAge);
    age.addEventListener('focus', clearAgeError);
    function clearAgeError(e) {
        ageVal.style.opacity = '0';
    }
    function validateAge(e) {
        var x = age.value;
        if(x < 18 || isNaN(x) || x.includes(',') || x.includes('.')) {
            ageVal.style.opacity = '1';
            registerArray[4] = 'error';
            errorArray[4] = 'Error! Please enter a valid age.';
        } else {
            registerArray[4] = 'Age: ' + x;
            errorArray[4] = null;
        }
    }


    // Phone number validation

    phoneNumber.addEventListener('blur', validatePhoneNumber);
    phoneNumber.addEventListener('focus', clearPhoneNumberError);
    function clearPhoneNumberError(e) {
        phoneNumberVal.style.opacity = '0';
    }
    function validatePhoneNumber(e) {
        var x = phoneNumber.value;
        if(x.length < 7 || isNaN(x) || x.includes(',') || x.includes('.')) {
            phoneNumberVal.style.opacity = '1';
            registerArray[5] = 'error';
            errorArray[5] = 'Error! Please enter a valid phone number.';
        } else {
            registerArray[5] = 'Phone Number: ' + x;
            errorArray[5] = null;
        }
    }


    // Address validation

    address.addEventListener('blur', validateAddress);
    address.addEventListener('focus', clearAddressError);
    function clearAddressError(e) {
        addressVal.style.opacity = '0';
    }
    function validateAddress(e) {
        var x = address.value;
        if(x.length < 5 || !checkForletters(x) || !checkForNumbers(x) || x.indexOf(' ') == -1) {
            addressVal.style.opacity = '1';
            registerArray[6] = 'error';
            errorArray[6] = 'Error! Please enter a valid address.';
        } else {
            registerArray[6] = 'Address: ' + x;
            errorArray[6] = null;
        }
    }

    // City validation

    city.addEventListener('blur', validateCity);
    city.addEventListener('focus', clearCityError);
    function clearCityError(e) {
        cityVal.style.opacity = '0';
    }
    function validateCity(e) {
        var x = city.value;
        if(x.length < 3 || checkForSpecialChar(x)) {
            cityVal.style.opacity = '1';
            registerArray[7] = 'error';
            errorArray[7] = 'Error! Please enter a valid city.';
        } else {
            registerArray[7] = 'City: ' + x;
            errorArray[7] = null;
        }
    }

    // Postal code validation 

    postalCode.addEventListener('blur', validatePostalCode);
    postalCode.addEventListener('focus', clearPostalCodeError);
    function clearPostalCodeError(e) {
        postalCodeVal.style.opacity = '0';
    }
    function validatePostalCode(e) {
        var x = postalCode.value;
        if(x.length < 3 || checkForSpecialChar(x)) {
            postalCodeVal.style.opacity = '1';
            registerArray[8] = 'error';
            errorArray[8] = 'Error! Please enter a valid postal code';
        } else {
            registerArray[8] = 'Postal Code: ' + x;
            errorArray[8] = null;
        }
    }

    // ID validation

    idNumber.addEventListener('blur', validateIdNumber);
    idNumber.addEventListener('focus', clearIdNumberError);
    function clearIdNumberError(e) {
        idNumberVal.style.opacity = '0';
    }
    function validateIdNumber(e) {
        var x = idNumber.value;
        if(x.length < 7 || x.length > 8 || isNaN(x) || x.includes('.')) {
            idNumberVal.style.opacity = '1';
            registerArray[9] = 'error';
            errorArray[9] = 'Error! Please enter a valid id number.';
        } else {
            registerArray[9] = 'ID Number: ' + x;
            errorArray[9] = null;
        }
    }

    //----- Close modal -----//

    var modal = document.getElementById('myModal');
    var close = document.getElementById('close');
    close.addEventListener('click',closeModal);
    function closeModal(e) {
        modal.style.display = "none";
    }
    
    //----- Register button: input validations & save user data to Local Storage -----//

    var dataStorage = function () {
        localStorage.setItem('name', fullName.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);
        localStorage.setItem('confirm password', confirmPassword.value);
        localStorage.setItem('age', age.value);
        localStorage.setItem('phone number', phoneNumber.value);
        localStorage.setItem('address', address.value);
        localStorage.setItem('city', city.value);
        localStorage.setItem('postal code', postalCode.value);
        localStorage.setItem('id number', idNumber.value);
    }

    var button = document.getElementById('button');
    button.addEventListener('click',clickEvent);
    function clickEvent(e) {
        var url = 'https://curso-dev-2021.herokuapp.com/newsletter?name='+fullName.value+'&email='+email.value+'&password='+password.value+'&confirmPassword='+confirmPassword.value+'&age='+age.value+'&phoneNumber='+phoneNumber.value+'&address='+address.value+'&city='+city.value+'&postalCode='+postalCode.value+'&id='+idNumber.value;
        var message = document.getElementById('message');
        if(registerArray.length == 0) {
            modal.style.display = "block";
            message.innerHTML = 'Please complete the form!';
        } else if(registerArray.includes("error")) {
            modal.style.display = "block";
            var errorMessages = '<ul class ="list-modal">';
            for(var i = 0; i < errorArray.length; i++) {
                if(errorArray[i] !== null && errorArray[i] !== undefined) {
                    errorMessages += '<li>' + errorArray[i] + '</li>';
                }
            }
            errorMessages += '</ul>';
            message.innerHTML = errorMessages;
        } else {
            fetch(url)
                .then(function(res) {
                    if(res.status === 200) {
                        return res.json();
                    } else {
                        throw new Error(res.status);
                    }
                })
                .then(function(data) {
                    modal.style.display = "block";  
                    var registerMessages = '<ul class ="list-modal">';
                    for(var i = 0; i < registerArray.length; i++) {
                            registerMessages += '<li>' + registerArray[i] + '</li>';
                    }
                    registerMessages += '</ul>';
                    message.innerHTML = registerMessages;
                    dataStorage();
                })
                .catch(function(err) {
                    modal.style.display = "block";
                    message.innerHTML = err;
                }) 
        }
    }

    //----- Check Local Storage for user data & autocomplete form  -----//

    function checkLocalStorage () {
        fullName.value = !!localStorage.getItem('name') ? localStorage.getItem('name') : null;
        email.value = !!localStorage.getItem('email') ? localStorage.getItem('email') : null;
        password.value = !!localStorage.getItem('password') ? localStorage.getItem('password') : null;
        confirmPassword.value = !!localStorage.getItem('confirm password') ? localStorage.getItem('confirm password') : null;
        age.value = !!localStorage.getItem('age') ? localStorage.getItem('age') : null;
        phoneNumber.value = !!localStorage.getItem('phone number') ? localStorage.getItem('phone number') : null;
        address.value = !!localStorage.getItem('address') ? localStorage.getItem('address') : null;
        city.value = !!localStorage.getItem('city') ? localStorage.getItem('city') : null;
        postalCode.value = !!localStorage.getItem('postal code') ? localStorage.getItem('postal code') : null;
        idNumber.value = !!localStorage.getItem('id number') ? localStorage.getItem('id number') : null;
    };
    
    window.onload = checkLocalStorage();

    //----- BONUS: Autocomplete name -----//

    var autoCompleteName = document.getElementById('name-input');
    autoCompleteName.addEventListener('keydown',autoCompleteEvent);
    autoCompleteName.addEventListener('focus',autoCompleteEvent);
    function autoCompleteEvent(e) {
        var text = e.target.value;
        var titleName = document.getElementById('h3-sub-page');
        titleName.innerHTML = 'Hello ' + text + ' !';
    }

}



