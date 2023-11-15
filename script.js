
// IMPORT ELEMENTS FROM HTML

// get email and submit buttons
const inputEmail = document.querySelector(".input-email");
const submitButton = document.querySelector(".submit-email-button");

// get article elements to replace to Thanks screen
const article = document.querySelector("article");
const articleContainer = document.querySelector(".article-container");
const thanksContainer = document.querySelector(".thanks-container");

// To show error message if the email doesn't match
const emailContainer = document.querySelector('.email-container');


// Save article container in a variable to use later
const articleContent = articleContainer.innerHTML;


// Add an event listener to the submit button
submitButton.addEventListener("click", function () {
  
  // get the value from the email input
  const inputE = inputEmail.value;

  //check if the value match with these symbols
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  // if the email input match those symbols
  if (inputE.match(validRegex)) {
    
    // then show the thanks screen
		articleContainer.innerHTML = `
    <div class="thanks-container">
      <div>
        <img src="assets/images/icon-success.svg" alt="Success Icon">
        <h1>Thanks for subscribing&excl;</h1>
        <p>A confirmation email has been sent to <span class="bold-text">${inputE}</span>. Please open it and click the button inside to confirm your subscription.</p>
      </div>
      <div class="dismiss-button-div">
        <button class="dismiss-button" onclick="dismissMessage()">Dismiss message</button>
      </div>
    </div>
    `;
    console.log('Valid email', inputE);
    
  } else {
    
    // If not, show this invalid email message
    console.log('Invalid email');

    emailContainer.innerHTML = `
    <div class="email-container">
      <div class="email-div">
        <h2>Email address</h2>
        <span>Invalid Email Address</span>
      </div>
      <form action="" method="get">
        <input class="input-email" type="text" name="text" id="text" placeholder="email&commat;company.com">
        <button class="submit-email-button" type="submit" value="submit">Subscribe to monthly newsletter</button>
      </form>
    </div>
    `

	}

});

// Click to go back to the main page
function dismissMessage() {
	articleContainer.innerHTML = articleContent;
}
