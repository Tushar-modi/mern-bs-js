function validateForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const website = document.getElementById('website');
    const message = document.getElementById('message');
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const websiteError = document.getElementById('websiteError');
    const messageError = document.getElementById('messageError');
    
    // Reset errors
    nameError.textContent = "";
    emailError.textContent = "";
    websiteError.textContent = "";
    messageError.textContent = "";
    
    // Check Name
    if (name.value.trim() === "") {
        nameError.textContent = "This field is required";
        name.classList.add('error-input');
    } else {
        name.classList.remove('error-input');
    }
    
    // Check Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        emailError.textContent = "A valid email address is required";
        email.classList.add('error-input');
    } else {
        email.classList.remove('error-input');
    }
    
    // Check Website
    const websitePattern = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!websitePattern.test(website.value)) {
        websiteError.textContent = "A valid URL is required";
        website.classList.add('error-input');
    } else {
        website.classList.remove('error-input');
    }
    
    // Check Message
    if (message.value.trim() === "") {
        messageError.textContent = "This field is required";
        message.classList.add('error-input');
    } else {
        message.classList.remove('error-input');
    }
}
