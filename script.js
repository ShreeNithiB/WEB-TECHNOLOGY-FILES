// Capture elements using DOM
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const age = document.getElementById("age");

// Username validation
username.addEventListener("keyup", function () {
    if (username.value === "") {
        document.getElementById("userError").innerText = "Username is required";
    } else {
        document.getElementById("userError").innerText = "";
    }
});

// Email validation
email.addEventListener("keyup", function () {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(pattern)) {
        document.getElementById("emailError").innerText = "Enter a valid email ID";
    } else {
        document.getElementById("emailError").innerText = "";
    }
});

// Password validation
password.addEventListener("keyup", function () {
    if (password.value.length < 6) {
        document.getElementById("passError").innerText =
            "Password must be at least 6 characters";
    } else {
        document.getElementById("passError").innerText = "";
    }
});

// Age validation
age.addEventListener("change", function () {
    if (age.value < 18) {
        document.getElementById("ageError").innerText =
            "Age must be 18 or above";
    } else {
        document.getElementById("ageError").innerText = "";
    }
});

// Final submit validation
document.getElementById("regForm").addEventListener("submit", function (e) {
    if (
        username.value === "" ||
        email.value === "" ||
        password.value.length < 6 ||
        age.value < 18
    ) {
        alert("Please fix errors before submitting");
        e.preventDefault(); // stop form submission
    } else {
        alert("Registration Successful!");
    }
});
