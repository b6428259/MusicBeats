var emailInput = document.getElementById("email");
var placeholderText = emailInput.placeholder;

emailInput.addEventListener("focus", function () {
    emailInput.placeholder = "";
});

emailInput.addEventListener("blur", function () {
    emailInput.placeholder = placeholderText;
});