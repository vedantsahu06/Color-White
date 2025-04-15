


// const form = document.getElementById('distressForm');
// const messagesContainer = document.getElementById('messagesContainer');
// const MAX_MESSAGES = 4;
// let messages = JSON.parse(localStorage.getItem('distressMessages')) || [];

// // Render existing messages from local storage
// messages.forEach(renderMessage);

// form.addEventListener('submit', async (e) => {
//   e.preventDefault();

//   const name = form.name.value.trim();
//   const contact = form.contact.value.trim();
//   const location = form.location.value.trim();
//   const type = form.type.value;
//   const severity = form.severity.value;
//   const messageText = form.message.value.trim();

//   if (!name || !location || !severity || !messageText) {
//     alert("Please fill all required fields.");
//     return;
//   }

//   const newMessage = {
//     name,
//     contact,
//     location,
//     type,
//     severity,
//     message: messageText,
//     time: new Date().toLocaleString(),
//   };

//   try {
//     await fetch('https://example.com/api/distress', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(newMessage)
//     });
//   } catch (error) {
//     console.error('Failed to send to server:', error);
//   }

//   addMessage(newMessage);
//   form.reset();
// });

// function addMessage(msg) {
//   if (messages.length >= MAX_MESSAGES) {
//     const oldMsgEl = messagesContainer.firstChild;
//     oldMsgEl.classList.add('fade-out');
//     setTimeout(() => {
//       messagesContainer.removeChild(oldMsgEl);
//       messages.shift();
//       renderMessage(msg);
//       updateLocalStorage();
//     }, 500);
//   } else {
//     renderMessage(msg);
//     messages.push(msg);
//     updateLocalStorage();
//   }
// }

// function renderMessage(msg) {
//   const msgDiv = document.createElement('div');
//   msgDiv.className = `message fade-in ${msg.type.toLowerCase()}`;
//   msgDiv.innerHTML = `
//     <strong>${msg.name}</strong><br/>
//     📍 ${msg.location} • 🕒 ${msg.time} ${msg.contact ? `• <br>📞 ${msg.contact}` : ""}
//     <p>${msg.message}</p>
//     <div class="type">${msg.type}</div>
//   `;
//   messagesContainer.appendChild(msgDiv);
// }

// function updateLocalStorage() {
//   localStorage.setItem('distressMessages', JSON.stringify(messages));
// }

const form = document.getElementById('distressForm');
    const messagesContainer = document.getElementById('messagesContainer');
    const MAX_MESSAGES = 3;
    let messages = JSON.parse(localStorage.getItem('distressMessages')) || [];

    messages.forEach(renderMessage);

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = form.name.value.trim();
      const contact = form.contact.value.trim();
      const location = form.location.value.trim();
      const type = form.type.value;
      const severity = form.severity.value;
      const messageText = form.message.value.trim();

      if (!name || !location || !severity || !messageText) {
        alert("Please fill all required fields.");
        return;
      }

      const newMessage = {
        name,
        contact,
        location,
        type,
        severity,
        message: messageText,
        time: new Date().toLocaleString(),
      };

      try {
        await fetch('https://example.com/api/distress', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newMessage)
        });
      } catch (error) {
        console.error('Failed to send to server:', error);
      }

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
          updateLocalStorage();
        }, 500);
      } else {
        renderMessage(msg);
        messages.push(msg);
        updateLocalStorage();
      }
    }

    function renderMessage(msg) {
      const msgDiv = document.createElement('div');
      msgDiv.className = `message fade-in ${msg.type.toLowerCase()}`;
      const severityClass = `severity-${msg.severity.toLowerCase()}`;
      msgDiv.innerHTML = `
        <strong>${msg.name}</strong>
        <div>📍 ${msg.location} • 🕒 ${msg.time}</div>
        ${msg.contact ? `<div>📞 ${msg.contact}</div>` : ""}
        <p>${msg.message}</p>
        <span class="severity-badge ${severityClass}">${msg.severity}</span>
        <div class="type">${msg.type}</div>
      `;
      messagesContainer.appendChild(msgDiv);
    }

    function updateLocalStorage() {
      localStorage.setItem('distressMessages', JSON.stringify(messages));
    }