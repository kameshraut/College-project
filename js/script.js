/* typing element start */ 

// Array of strings to be typed
const texts = ["POPULAR EDUCATION", 
"Education Trends", "Campus Pulse","Student Perspectives",
"Learning Landscape",
"Student Insights Hub"];

const typingSpeed = 100;
let textIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing-element");

// Function to type text
function typeText() {
  if (charIndex < texts[textIndex].length) {
    typingElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(eraseText, 1000);
  }
}

// Function to erase text
function eraseText() {
  if (charIndex > 0) {
    typingElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, typingSpeed / 2);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeText, typingSpeed);
  }
}

// Start typing the first text
setTimeout(typeText, 1000);
/* typing Element end */ 





/* show password js start */
function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password");
  const eyeIcon = document.getElementById("eyeIcon");

  if (password.type === "password") {
    password.type = "text";
      eyeIcon.src = "assets/images/theme/open-eye.png";
  } else {
    password.type = "password";
      eyeIcon.src = "assets/images/theme/close-eye.png";
  }
}
/* show password js end */