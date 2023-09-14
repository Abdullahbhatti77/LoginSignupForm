// Toggle password visibility
togglePassword.addEventListener("click", function () {
    if (loginPassword.type === "password") {
        loginPassword.type = "text";
        togglePassword.textContent = "Hide";
    }
    else {
        loginPassword.type = "password";
        togglePassword.textContent = "Show";
    }
});

// Switch between login and signup forms
goToSignUp.addEventListener("click", function () {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
});
goToLogin.addEventListener("click", function () {
    signupForm.style.display = "none";
    loginForm.style.display = "block";
});

// For Login Form
function loginData(event) {
    event.preventDefault();
    var loginEmail = document.getElementById("loginEmail").value;
    var loginPassword = document.getElementById("loginPassword").value;
    // For local storage
    localStorage.setItem("loginEmail", loginEmail);
    localStorage.setItem("loginPassword", loginPassword);
    // For Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(loginEmail)) {
        alert("Invalid email format. Please enter a valid email.");
    }
    // For Password length validation
    if (loginPassword.length < 6) {
        alert("Password must be at least 6 characters long.");
    }
}

// For Sign Up Form
function signUpData(event) {
    event.preventDefault();
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var image = document.getElementById("imageUpload").value;
    var captureImage=document.getElementById("captureImage").value;
    // For local storage
    localStorage.setItem("first_name", firstName);
    localStorage.setItem("last_name", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("address", address);
    localStorage.setItem("phone", phone);
    localStorage.setItem("image", image);
    localStorage.setItem("captureImage", captureImage);
}

// For webcam
Webcam.set({
    width: 350,
    height: 350,
    image_format: 'jpeg',
    jpeg_quality: 90
});

Webcam.attach("#camera");

function capture_image() {
    Webcam.snap(function (data_uri) {
        document.getElementById('results').innerHTML = '<img src="' + data_uri + '"/>'
    });
}




