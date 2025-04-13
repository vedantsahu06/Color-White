const form = document.getElementById('distressForm');
const messagesContainer = document.getElementById('messagesContainer');
const MAX_MESSAGES = 4;
let messages = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const contact = document.getElementById('contact').value;
  const location = document.getElementById('location').value;
  const type = document.getElementById('type').value;
  const severity = form.querySelector('input[name="severity"]:checked').value;
  const message = document.getElementById('message').value;

  const newMessage = {
    name,
    contact,
    location,
    type,
    severity,
    message,
    time: new Date().toLocaleString(),
  };

  addMessage(newMessage);
  form.reset();
});

function addMessage(msg) {
  if (messages.length >= MAX_MESSAGES) {
    const oldMsgEl = messagesContainer.firstChild;
    oldMsgEl.classList.add('fade-out');
    setTimeout(() => {
      messagesContainer.removeChild(oldMsgEl);
      messages.shift();
      renderMessage(msg);
    }, 500);
  } else {
    renderMessage(msg);
  }
}

function renderMessage(msg) {
  const msgDiv = document.createElement('div');
  msgDiv.className = `message fade-in ${msg.type.toLowerCase()}`;
  msgDiv.innerHTML = `
    <strong>${msg.name}</strong><br/>
    📍 ${msg.location} • 🕒 ${msg.time} ${msg.contact ? `• 📞 ${msg.contact}` : ""}
    <p>${msg.message}</p>
    <div class="type">${msg.type}</div>
  `;
  messagesContainer.appendChild(msgDiv);
  messages.push(msg);
}