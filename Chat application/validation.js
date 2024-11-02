function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateSignUpInputCredentials() {
    var username = document.getElementById("username").value; 
    var email = document.getElementById("email").value; 
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var usernameErr = emailErr = passwordErr = confirmPasswordErr = true;

    if (username === "") {
        printError("usernameError", "Please enter your username"); 
       
        var nameRegex = /^[A-Za-z ]+$/;
        if (!nameRegex.test(username)) {
            printError("usernameError", "Please enter a valid username");
        } else {
            printError("usernameError", "");
            usernameErr = false;
        }
    }

    if (email === "") {
        printError("emailError", "Please enter your email address");
    } else {
        var emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
            printError("emailError", "Please enter a valid email address");
        } else {
            printError("emailError", "");
            emailErr = false;
        }
    }

    if (password === "") {
        printError("passwordError", "Please enter your password");
    } else {
        printError("passwordError", "");
        passwordErr = false;
    }
    if (confirmPassword === "") {
        printError("confirmPasswordError", "Please confirm your password");
    } else if (confirmPassword !== password) {
        printError("confirmPasswordError", "Passwords do not match");
    } else {
        printError("confirmPasswordError", "");
        confirmPasswordErr = false;
    }

    if (usernameErr || emailErr || passwordErr || confirmPasswordErr) {
        return false;
    } else {
        return true;
    }
}
function validateLoginInputCredentials() {

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    emailError.innerHTML = '';
    passwordError.innerHTML = '';

    let isValid = true;

    if (email === "") {
        printError('emailError', "Email is required.");
        isValid = false;
    }
    
    else if (!validateEmailFormat(email)) {
        printError('emailError', "Please enter a valid email address.");
        isValid = false;
    }

    if (password === "") {
        printError('passwordError', "Password is required.");
        isValid = false;
    }

    return isValid;
}

function validateEmailFormat(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}