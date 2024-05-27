import { notEmpty, validEmail,validPassword,passwordMatch} from "./validateinfo";
import { searchClick } from "./search";

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
inputCheckPassword.name = 'checkPassword';
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


function valid (e) {
    e.preventDefault();
    let isValid = true;
    errorMessage.innerHTML = ''; 

    if (!notEmpty(input.value)) {
        isValid = false;
        errorMessage.innerHTML += '<p>Field has to be filled.</p>';
    }

    if (!validEmail(inputEmail.value)) {
        isValid = false;
        errorMessage.innerHTML += '<p>Invalid email address.</p>';
    }

   
    if (!validPassword(inputPassword.value)) {
        isValid = false;
        errorMessage.innerHTML += '<p>Password must be at least 6 characters long and include a number.</p>';
    }
   
    if (!passwordMatch(inputPassword.value, inputCheckPassword.value)) {
        isValid = false;
        errorMessage.innerHTML += '<p>Passwords do not match.</p>';
    }

    if (isValid) {
        // Submit the form 
        console.log('Form is valid! Submitting...');
        Form.submit();
        // Other action
    } else {
        console.log('Form is invalid! Showing errors...');
    }

    Form.addEventListener('submit', valid);
}


// Form.addEventListener('submit', valid);




// Comment Area with Post
document.getElementById('comment').addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            // Get the comment data from the form
            const comment = document.getElementById('comment').value;

            //  POST request to the server for the comment area
            fetch('https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=11f174e6942c85eb0f637bc5330346b5', {
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
               
            })
            .catch(error => {
                console.error('Error adding comment:', error);
               
            });
        });

//  Event on the search Button
document.getElementById('searchButton').addEventListener('click', searchClick)
            const searchBar = document.getElementById('searchInput').value;
            search(searchBar);
        
// document.addEventListener('DOMContentLoaded', () => {
//     const searchButton = document.querySelector('#searchButton');
//     if (searchButton) {
//         searchButton.addEventListener('click', searchClick);
//     }
   
// });     

async function search() {
    const searchBar = document.getElementById('searchInput').value;
    try {
        const response = await fetch(`https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=11f174e6942c85eb0f637bc5330346b5${encodeURIComponent(searchBar)}`);
        const results = await response.json();
        displayResults(results);
    } catch (error) {
        console.error('Error fetching search results:', error);
    }

}

function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    results.forEach(result => {
        const div = document.createElement('div');
        div.textContent = result;
        resultsDiv.appendChild(div);
    });
    
}
  