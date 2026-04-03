function toggleChat() {
  const chat = document.getElementById("chatBody");
  chat.style.display = chat.style.display === "block" ? "none" : "block";
}

function handleKey(e) {
  if (e.key === "Enter") sendMessage();
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const msg = input.value.toLowerCase();

  addMessage("You: " + msg);

  let reply = "I am Malya's bot 🤖";

  if (msg.includes("skills")) {
    reply = "Python, Java, JavaScript, AI/ML, React";
  }
  else if (msg.includes("projects")) {
    reply = "I have built Smart Traffic Monitor and EduAdapt AI.";
  }
  else if (msg.includes("contact")) {
    reply = "Email: malyareddy646@gmail.com";
  }

  setTimeout(() => addMessage("Bot: " + reply), 500);

  input.value = "";
}

function addMessage(text) {
  const div = document.createElement("div");
  div.textContent = text;
  document.getElementById("messages").appendChild(div);
}