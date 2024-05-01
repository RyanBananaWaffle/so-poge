const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let ready = false;

// Function to display "happy bday" message
function displayBirthdayMessage() {
  question.innerHTML = "Happy Birthday!";
  setTimeout(() => {
    // Ask if the user is ready
    const userReady = confirm("Are you ready?");
    if (userReady) {
      ready = true;
      showConfession();
    } else {
      // If user is not ready, increase text size gradually
      increaseTextSize();
    }
  }, 2000); // 2000 milliseconds = 2 seconds delay before showing the message
}

// Function to gradually increase text size
function increaseTextSize() {
  let fontSize = 1.5; // Initial font size
  const interval = setInterval(() => {
    fontSize += 0.1; // Increase font size gradually
    question.style.fontSize = fontSize + "em";
    if (fontSize >= 3) {
      clearInterval(interval); // Stop increasing font size when it reaches 3em
    }
  }, 100); // Increase font size every 100 milliseconds
}

// Function to show confession
function showConfession() {
  question.innerHTML = "You like me?";
  gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gifyou.webp";
}

yesBtn.addEventListener("click", () => {
  if (ready) {
    question.innerHTML = "Aaaaa, I like you too";
    gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
  } else {
    alert("Please wait for the birthday message first.");
  }
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

// Call the function to display birthday message when the page loads
displayBirthdayMessage();
