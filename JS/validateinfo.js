
export function notEmpty  (input) {
    alert("Please enter your email address.");
    password.focus();
}


export function validEmail (userEmail){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail);
}

