const socket = io();

    socket.emit('join', '<%= roomName %>');

    socket.on('message', (message) => {
      const messagesDiv = document.getElementById('message-container');
      const messageElement = document.createElement('div');
      messageElement.textContent = message;
      messagesDiv.appendChild(messageElement);
    });

    const messageForm = document.getElementById('send-container');
    const messageInput = document.getElementById('message-input');

    messageForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const message = messageInput.value;
      socket.emit('message', { room: '<%= roomName %>', message });
      messageInput.value = '';
    });