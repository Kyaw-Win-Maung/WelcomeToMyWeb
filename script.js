// Function to show the modal form
function showForm() {
    document.getElementById('contact_panel').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

// Function to hide the modal form
function hideForm() {
    document.getElementById('contact_panel').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}


function validateForm() {
    // Get the form element
    var form = document.getElementById("contact-form");

    // Check if the form is valid (all required fields are filled)
    if (form.checkValidity()) {
        // If the form is valid, send the email
        sendMail();
        return false; // Prevent the form from submitting (page reload)
    } else {
        // If the form is invalid, alert the user
        alert("Please fill all required fields.");
        return false; // Prevent the form from submitting
    }
}

function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_n2876ky", "template_cut3c18", parms)
    .then(function() {
        alert("Email sent!"); // Show success alert
        document.getElementById("contact-form").reset(); // Clear all form fields
    });
}
