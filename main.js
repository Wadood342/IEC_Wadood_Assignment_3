function validateForm() {
    let name = document.getElementById('nameInput').value;
    let email = document.getElementById('emailInput').value;
    let comments = document.getElementById('commentsInput').value;

    // Simple validation
    if (name.trim() === '') {
        alert('Please enter your name');
        return;
        
    }

    if (email.trim() === '') {
        alert('Please enter your email');
        return;
    }

    // Regular expression for basic email validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    if (comments.trim() === '') {
        alert('Please enter your comments');
        return;
    }

    alert('Form submitted successfully!');
}