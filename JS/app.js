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


document.getElementById('comment').addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            // Get the comment data from the form
            const comment = document.getElementById('comment').value;

            // Make a POST request to the server
            fetch('/api/add_comment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ comment: comment })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to add comment');
                }
                return response.json();
            })
            .then(data => {
                console.log('Comment added successfully:', data);
                // Optionally, update the UI to show the new comment
            })
            .catch(error => {
                console.error('Error adding comment:', error);
                // Optionally, display an error message to the user
            });
        });