const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const icon = hamburger.querySelector("i");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});

// ChatBot Logic //
const aboutMe = {
  name: "Bob, Elhadji Massow Ndiaye Bot",
  role: "Aspiring Software Engineer",
  skills: ["HTML", "CSS", "JavaScript", "Node.js", "React", "Git", "GitHub"],
  projects: [
    "R2Supercar",
    "MoneeSplit",
    "Calculator App",
    "Back2Benefits",
    "Google Homepage",
    "Rock, Paper, Scissors Game",
  ],
  education: ["Road to Hire Apprenticeship"],
  contact: {
    email: "massow.ndiaye3011@email.com",
    github: "https://github.com/MassowNdiaye",
    linkedin: "https://www.linkedin.com/in/elhadji-massow-ndiaye-b11397299/e",
  },
};

const chatBox = document.getElementById("chat-box");

// Toggle chat window
function toggleChat() {
  const chat = document.getElementById("chat-container");
  const toggle = document.getElementById("chat-toggle");

  chat.classList.toggle("hidden");
  toggle.classList.toggle("hidden");
}

// Add messages to chat
function addMessage(text, sender) {
  const div = document.createElement("div");
  div.className = `message ${sender}`;
  div.innerText = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function clickSuggested(question) {
  const input = document.getElementById("user-input");
  input.value = question; // fill input with question
  sendMessage(); // send it automatically
}

// Bot response logic
function getBotResponse(message) {
  message = message.toLowerCase();

  // Name
  if (message.includes("name") || message.includes("who are you")) {
    return `Hello! I'm ${aboutMe.name}, your personal assistant for learning about him.`;
  }

  // Role
  if (message.includes("role") || message.includes("what do you do")) {
    return `I assist you in understanding what Elhadji does. He is an ${aboutMe.role}.`;
  }

  // Skills
  if (message.includes("skills") || message.includes("what can you do")) {
    return `Elhadji has skills in: ${aboutMe.skills.join(", ")}.`;
  }

  // Projects
  if (
    message.includes("projects") ||
    message.includes("work") ||
    message.includes("build")
  ) {
    return `Here are some projects Elhadji has built: ${aboutMe.projects.join(
      ", "
    )}.`;
  }

  // Education
  if (
    message.includes("education") ||
    message.includes("study") ||
    message.includes("learning")
  ) {
    return `Elhadji studied at: ${aboutMe.education.join(", ")}.`;
  }

  // Contact
  if (
    message.includes("contact") ||
    message.includes("email") ||
    message.includes("github") ||
    message.includes("linkedin")
  ) {
    return `You can contact Elhadji via:\nEmail: ${aboutMe.contact.email}\nGitHub: ${aboutMe.contact.github}\nLinkedIn: ${aboutMe.contact.linkedin}`;
  }

  // Default fallback
  return "I’m here to answer questions about Elhadji! Try asking about his skills, projects, education, or contact info.";
}

// Send message
function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();

  if (message === "") return;

  addMessage(message, "user");
  input.value = "";

  setTimeout(() => {
    const response = getBotResponse(message);
    addMessage(response, "bot");
  }, 400);
}

// Initial greeting
addMessage("Hi! I’m Elhadji’s assistant 🤖 Ask me anything about him!", "bot");
