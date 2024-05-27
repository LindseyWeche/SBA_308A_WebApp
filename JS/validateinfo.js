
export function notEmpty  (input) {
    alert("Please enter your email address.");
    password.focus();
}


export function validEmail (userEmail){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail);
}

export function validPassword (password){
    if (password.length <6)
        return "Passwords must be at least 6 characters."
    else if (!/[a-z]/.test(password)||!/[A-Z]/.test(password)|| !/[0-9]/.test(password))
        return "Passwords require at least one of a-z, A-Z and 0-9"
    return""
}

