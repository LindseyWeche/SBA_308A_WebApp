// import { notEmpty, validEmail} from "./validateinfo";

const formContainer = document.getElementById("container")
// Create Form for Newsletter
const Form = document.createElement('Form');

// Form inputs

const inputEmail = document.createElement("input");
inputEmail.type = 'email';
inputEmail.name = 'userEmail';
inputEmail.placeholder = 'Enter Your Email';

const inputPassword = document.createElement("input");
inputPassword.type = 'text';
inputPassword.name = 'password';
inputPassword.placeholder = 'Enter your Password';

const inputCheckPassword = document.createElement("input");
inputCheckPassword.type = 'text';
inputCheckPassword.name = 'Checkpassword';
inputCheckPassword.placeholder = 'Re-Enter your Password';

// submit button
const buttonSubmit = document.createElement("input");
buttonSubmit.type = 'submit';
buttonSubmit.value = 'Subscribe';

// Add elements to Form
Form.appendChild(inputEmail);
Form.appendChild(inputPassword);
Form.appendChild(inputCheckPassword);
Form.appendChild(buttonSubmit);

// Append Form to the DOM
formContainer.appendChild(Form)



let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5seconds
}
