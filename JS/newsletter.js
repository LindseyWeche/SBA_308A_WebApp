// Create Form for Newsletter
const Form = document.createElement('Form');

// Form inputs

const inputEmail = document.createElement("input");
inputEmail.type = 'email';
inputEmail.name = 'userEmail';
inputEmail.placeholder = 'Enter Your Email';

const inputPassword = document.createElement("input");
inputName.type = 'text';
inputName.name = 'password';
inputName.placeholder = 'Enter your Password';

const inputCheckPassword = document.createElement("input");
inputName.type = 'text';
inputName.name = 'Checkpassword';
inputName.placeholder = 'Re-Enter your Password';

// submit button
var buttonSubmit = document.createElement("input");
buttonSubmit.type = 'submit';
buttonSubmit.value = 'Submit';

// Add elements to Form
Form.appendChild(inputEmail);
Form.appendChild(inputPassword);
Form.appendChild(inputCheckPassword);
Form.appendChild(buttonSubmit);

// Append Form to the DOM
document.body.appendChild(Form);