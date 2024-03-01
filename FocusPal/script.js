const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', function() {
    const message = messageInput.value;
    // Simulate receiving a response (replace with your AI logic later)
    const response = "You said: " + message;
    chatBox.innerHTML += `<p>You: ${message}</p>`;
    chatBox.innerHTML += `<p>Bot: ${response}</p>`;
    messageInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
});