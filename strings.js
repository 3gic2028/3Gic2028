
console.log("firstName =" + firstName);
let lastName = document.getElementById("txtLastName").value;
let zipCode = document.getElementById("txtZip").value;
console.log("lastName =" + lastName);
console.log("zipCode =" + zipCode);

// create a new variable to hold both first and last name
 let fullName = firstName + " " + lastName;

console.log('fullName ='+ fullName);

// create a shortcut to the message area(div) in the HTML
let divMessage = document.getElementById("divMessage");

// I am going to create an error message if the full name has either 1 character (") or more than 20
// for the assignment, change 10 to 20
if (fullName.length == 1 || fullName.length > 20) {
	// the user gets notified of the error but does not get the secret message
	divMessage.innerHTML = "Invalid name entered. Please try again.";
	// this will prevent the form from trying to submit to server side code that we don't have in this class
	return false;
} else if (zipCode.length !== 5) {
	// if the zip code is not exactly 5 digits long give the user an error message
	divMessage.innerHTML = "Invalid zip code entered. Please try again.";
	return false;
}
// if we get to this else statement, it means all of the inputs validate successfully successfully give the user a secret Message
// the inputs validated successfully , so show the user a message
divMessage.innerHTML = "Congratulations " + fullName + ". The secret word is Volleyball.";
 divMessage.innerHTML =" Congratulations" + fullName +" The secret word is Volleyball":